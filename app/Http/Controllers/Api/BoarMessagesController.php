<?php

namespace App\Http\Controllers\Api;

use App\Models\BoarMessage;
use App\Http\Controllers\ApiController;
use App\Mail\SendEmailMail;
use App\Models\HousUnit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class BoarMessagesController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // user_can(['boar_messages.index']);

        $boarMessages = BoarMessage::with(BoarMessage::getRelationships());

        // (1)filltering
        $boarMessages = $this->filtering($request, $boarMessages);
        $boarMessages = $boarMessages->get();

        // (2)sort
        $boarMessages = $this->sorting($request, $boarMessages);

        // (3)paginate
        $boarMessages = $boarMessages->paginate($request->get('per_page') ?? 10);

        $resource = $boarMessages->toArray();

        $resource['lists'] = BoarMessage::getLists();

        return $this->responseSuccess(
            'Entradas de la cartelera obtenidas!',
            $resource,
            true,
            false
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function create()
    {
        // user_can(['boar_messages.create']);
        return response()->json([
            'message' => 'Formulario para crear entradas de la cartelera!',
            'data' => null,
            'lists' => BoarMessage::getLists()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // user_can(['boar_messages.store']);

        $this->varidate($request);

        $input = $request->input('model');


        DB::beginTransaction();
        try {
            //create data
            $boarMessage = BoarMessage::create($input);

            //sync(attach/detach)
            if ($request->input('pivots')) {
                $this->sync($request->input('pivots'), $boarMessage);
            }

        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->responseError(
                '' . $exception->getMessage(),
                [
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]
            );
        }
        DB::commit();

        return $this->responseSuccess(
            'Entrada de la cartelera almacenada!',
            $boarMessage->toArray(),
            false,
            false,
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // user_can(['boar_messages.show']);

        $boarMessage = BoarMessage::with(BoarMessage::getRelationships())->findOrFail($id);

        $resource = $boarMessage->toArray();
        $resource['lists'] = BoarMessage::getLists();

        return $this->responseSuccess(
            'Entrada de la cartelera obtenido!',
            $resource,
            false,
            false,
            200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        // user_can(['boar_message.edit']);

        $boarMessage = BoarMessage::with(BoarMessage::getRelationships())->findOrFail($id);

        return $this->responseSuccess(
            'Formulario para editar entrada de la cartelera!',
            [
                'model' => $boarMessage,
                'lists' => BoarMessage::getLists(),
            ],
            false
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function update(Request $request, $id)
    {
        //
        // user_can(['boar_messages.update']);

        $boarMessage = BoarMessage::findOrFail($id);

        $this->varidate($request, $boarMessage);

        $input = $request->input('model');

        DB::beginTransaction();
        try {
            //update data
            $boarMessage->update($input);

            //sync(attach/detach)
            if ($request->get('pivots')) {
                $this->sync($request->get('pivots'), $boarMessage);
            }

            if ($input['status'] == 'active' && $input['notify_to_users']) {
                $users = User::all()->toArray();

                $usersArray = [];

                foreach ($users as $user) {
                    $usersArray[] = [
                        'name' => $user['name'],
                        'email' => $user['email']
                    ];
                }

                $this->sendBoardNotifyMail($boarMessage, $usersArray);

            }

            if ($input['status'] == 'active' && $input['notify_to_house_units']) {
                $houseUnits = HousUnit::all()->toArray();

                $usersArray = [];

                foreach ($houseUnits as $houseUnit) {

                    if ($houseUnit['contact_email'] && filter_var($houseUnit['contact_email'], FILTER_VALIDATE_EMAIL)) {
                        $usersArray[] = [
                            'name' => ($houseUnit['contact_first_name'] ?? '') . ' ' . ($houseUnit['contact_last_name'] ?? ''),
                            'email' => $houseUnit['contact_email']
                        ];
                    }

                }

                $this->sendBoardNotifyMail($boarMessage, $usersArray);
            }


        } catch (Exception $exception) {
            DB::rollBack();
            return $this->responseError(
                '' . $exception->getMessage(),
                [
                    'message' => $exception->getMessage(),
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]
            );
        }
        DB::commit();

        return $this->responseSuccess(
            'Entrada de la cartelera actualizado!',
            $boarMessage->toArray(),
            false,
            false,
            202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // user_can(['boar_messages.destroy']);

        $boarMessage = BoarMessage::findOrFail($id);
        $boarMessage->delete();
        return $this->responseSuccess(
            'Entrada de la cartelera eliminado!',
            $boarMessage->toArray(),
            false,
            false,
            203
        );
    }

    /**
     * Show the form for duplicating the specified resource.
     *
     * @param \App\BoarMessage $operMovement
     * @return \Illuminate\Http\JsonResponse
     */
    public function duplicate($id)
    {
        // user_can(['oper_movement.duplicate']);

        $boarMessage = BoarMessage::with(BoarMessage::getRelationships())->findOrFail($id);
        $boarMessage->id = null;

        return $this->responseSuccess(
            'Formulario para duplicar !',
            [
                'model' => $boarMessage,
                'lists' => BoarMessage::getLists(),
            ],
            false
        );
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, BoarMessage $boarMessage = null)
    {
        $request->validate(BoarMessage::getValidateRule($boarMessage));
    }


    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, BoarMessage $boarMessage)
    {
        foreach ($pivots_data as $pivot_child_model_name => $pivots) {

            $pivotIds = [];
            // remove 'id'
            foreach ($pivots as &$value) {
                if (array_key_exists('id', $value)) {
                    $pivotIds[] = $value['id'];
                    unset($value['id']);
                }
            }
            unset($value);

            $method = Str::camel(Str::plural($pivot_child_model_name));
            $boarMessage->$method()->sync($pivotIds);
        }
    }

    public function sendBoardNotifyMail($board, $users) {

        foreach ($users as $user) {
            $data = new \stdClass();
            $data->user = $user;
            $data->email = $user['email'];
            $data->subject = 'Entrada de cartelera: ' . $board['name'];
            $data->name = $user['name'];

            $data->intro_lines = [
                $board['name'] . '<br>',
                'Por favor siga el siguiente enlace para mas información',
            ];


            $data->button = [
                'url' => config('app.url') . '/board/' . $board['id'] . '/show',
                'text' => 'Ver Entrada de Cartelera'
            ];

            $data->outro_lines = [
                'Gracias por su atención.'
            ];

            $data->view = 'mail.email_template';

            try {
                Mail::to($user['email'])->queue(new SendEmailMail($data));
            } catch (\Exception $exception) {
                return $this->responseError($exception->getMessage());
            }
        }

    }
}
