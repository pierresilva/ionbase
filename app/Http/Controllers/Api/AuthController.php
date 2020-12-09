<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Notifications\ResetPassword;
use App\PasswordReset;
use App\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends ApiController
{
    //

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => [
                'login',
                'register',
                'verifyEmail',
                'resendVerifyEmail',
                'passwordRecover',
                'passwordFindReset',
                'passwordReset'
            ]
        ]);
    }

    /**
     * Register a User.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|between:2,100',
            'first_name' => 'required',
            'last_name' => 'required',
            'accept_terms_conditions' => 'required|boolean|accepted',
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required|confirmed|string|min:6',
        ]);

        if ($validator->fails()) {
            return \response()->json([
                'message' => __('Validation error'),
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();
        try {
            $user = User::create(array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->password)]
            ));
            $user->sendEmailVerificationNotification();
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
        DB::commit();


        return response()->json([
            'message' => __('Successfully registered'),
            'user' => $user
        ], 201);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => __('Validation error'),
                'errors' => $validator->errors()
            ], 422);
        }

        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json([
                'message' => __('Email or password not valid'),
                'errors' => [
                    'authentication' => __('Unauthorized')
                ]
            ], 401);
        }

        $data = $this->createNewToken($token);

        return \response()->json([
            'message' => __('Logged in successfully'),
            'data' => $data->original,
        ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile(): \Illuminate\Http\JsonResponse
    {
        if (!\auth()->user()) {
            return response()->json([
                'message' => __('Not authorized'),
            ], 401);
        }

        return response()->json([
            'message' => __('Profile obtained successfully'),
            'data' => [
                'user' => auth()->user(),
                'acl' => $this->getAccessControlData()
            ]
        ]);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(): \Illuminate\Http\JsonResponse
    {
        auth()->logout();

        return response()->json([
            'message' => __('Successfully logged out')
        ]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh(): \Illuminate\Http\JsonResponse
    {
        $data = $this->createNewToken(auth()->refresh());

        return \response()->json([
            'message' => __('Token refreshed successfully'),
            'data' => $data->original
        ]);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken(string $token): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    /**
     * @param $userId
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function verifyEmail($userId, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return response()->json([
                'message' => __('Invalid or expired verification'),
            ], 401);
        }

        $user = User::findOrFail($userId);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        if (env('APP_ENV') == 'local') {
            return redirect(config('app.url_front') . '/auth/login/' . Str::random(8));
        } else {
            return redirect('auth/login' . Str::random(8));
        }

        return response()->json([
            'message' => __('Email verified successfully')
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     */
    public function resendVerifyEmail(Request $request): \Illuminate\Http\JsonResponse
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => __('Validation error'),
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->get('email'))->first();

        if ($user->hasVerifiedEmail()) {
            return response()->json([
                'message' => __('Email is already verified')
            ], 400);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => __('New verification email send')
        ]);

    }

    /**
     * Get access control data (roles and permissions)
     *
     * @return array
     */
    private function getAccessControlData(): array
    {
        $acl = [];

        if (class_exists('\pierresilva\AccessControl\AccessControl')) {
            $acl['roles'] = \auth()->user()->getRoles();
            $acl['permissions'] = \auth()->user()->getPermissions();
        }

        return $acl;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function passwordRecover(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);
        $user = User::where('email', $request->get('email'))->first();

        if (!$user) {
            return $this->responseError(__('No encontramos usuarios con ese correo.'), [], 422);
        }

        $passwordReset = PasswordReset::whereEmail($user->email)->first();

        if ($passwordReset) {
            $passwordReset->update([
                'token' => Str::random(16),
            ]);
        } else {
            $passwordReset = PasswordReset::create([
                'email' => $user->email,
                'token' => Str::random(16),
            ]);
        }

        if ($user && $passwordReset) {

            $token = $passwordReset->token;

            try {
                $user->notify(new ResetPassword($token));
            } catch (\Exception $exception) {
                return $this->responseError('No pudimos enviar el email, intenta mas tarde.');
            }
            return $this->responseSuccess('Enviamos un email para que restablezcas tu contraseña');
        }

        return $this->responseError(null, null);
    }

    /**
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function passwordFindReset($token)
    {
        $passwordReset = null;
        try {
            $passwordReset = PasswordReset::where('token', $token)->first();
            if (null == $passwordReset) {
                return $this->responseError('No encontramos una solicitud de recuperación de contraseña valida');
            }
        } catch (\Exception $exception) {
            return $this->responseError('No encontramos una solicitud de recuperación de contraseña valida');
        }

        return $this->responseSuccess('Solicitud de recuperación de contraseña valida', $passwordReset->toArray());
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function passwordReset(Request $request)
    {
        $passwordReset = PasswordReset::where('token', $request->get('token'))->first();

        if (!$passwordReset) {
            return $this->responseError('No encontramos una solicitud de recuperación de contraseña valida');
        }

        try {

            $user = User::where('email', $passwordReset->email)->first();

            $user->update(
                [
                    'password' => bcrypt($request->get('password'))
                ]
            );

            try {
                PasswordReset::where('token', $request->get('token'))->delete();
            } catch (\Exception $exception) {
                return $this->responseError($exception->getMessage());
            }


        } catch (\Exception $exception) {
            return $this->responseError('No pudimos restablecer tu contraseña.', $exception);
        }

        return $this->responseSuccess('Por favor ingresa con tu nueva contraseña!');

    }
}
