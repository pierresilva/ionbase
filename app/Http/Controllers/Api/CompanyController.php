<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompanyController extends ApiController
{

// generated section

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // user_can(['company.index']);

		// $companies = new Company;
	    $companies = Company::with(Company::getRelationships());

		// (1)filltering
        $companies = $this->filtering($request, $companies);
        $companies = $companies->get();

        // (2)sort
        $companies = $this->sorting($request, $companies);

        // (3)paginate
        $companies = $companies->paginate($request->get('per_page') ?? 10);

        $resource = $companies->toArray();

        $resource['lists'] = Company::getLists();

        return $this->responseSuccess(
          'EMPRESA obtenidos!',
          $resource,
          true,
          false
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // user_can(['company.create']);

            return response()->json([
              'message' => 'Formulario para crear EMPRESA!',
              'data' => null,
              'lists' => Company::getLists()
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // user_can(['company.store']);

        $this->varidate($request);

        $input = $request->input('model');

                                                                                                                        
        DB::beginTransaction();
        try {
          //create data
          $company = Company::create( $input );

          //sync(attach/detach)
          if ($request->input('pivots')) {
            $this->sync($request->input('pivots'), $company);
          }
            if (isset($input['comp_phones']) && count($input['comp_phones'])) {
                foreach ($input['comp_phones'] as $compPhone) {
                  \App\Models\CompPhone::find($compPhone['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_addresses']) && count($input['comp_addresses'])) {
                foreach ($input['comp_addresses'] as $compAddress) {
                  \App\Models\CompAddress::find($compAddress['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_contacts']) && count($input['comp_contacts'])) {
                foreach ($input['comp_contacts'] as $compContact) {
                  \App\Models\CompContact::find($compContact['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_responsabilities']) && count($input['comp_responsabilities'])) {
                foreach ($input['comp_responsabilities'] as $compResponsability) {
                  \App\Models\CompResponsability::find($compResponsability['id'])->update(['company_id' => $company->id]);
                }
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
          'EMPRESA almacenado!',
          $company->toArray(),
          false,
          false,
          201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company     * @return \Illuminate\Http\Response
     */
    public function show($companyId)
    {
        // user_can(['company.show']);

        $company = Company::with(Company::getRelationships())->findOrFail($companyId);

                        $company->comp_phone_ids = collect($company->compPhones)->pluck('id');
                                        $company->comp_address_ids = collect($company->compAddresses)->pluck('id');
                                        $company->comp_contact_ids = collect($company->compContacts)->pluck('id');
                                        $company->comp_responsability_ids = collect($company->compResponsabilities)->pluck('id');
                        
        $resource = $company->toArray();
        $resource['lists'] = Company::getLists();

        return $this->responseSuccess(
          'EMPRESA obtenido!',
          $resource,
          false,
          false,
          200
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company     * @return \Illuminate\Http\Response
     */
    public function edit($companyId)
    {
        // user_can(['company.edit']);

        $company = Company::with(Company::getRelationships())->findOrFail($companyId);
                        $company->comp_phone_ids = collect($company->compPhones)->pluck('id');
                                        $company->comp_address_ids = collect($company->compAddresses)->pluck('id');
                                        $company->comp_contact_ids = collect($company->compContacts)->pluck('id');
                                        $company->comp_responsability_ids = collect($company->compResponsabilities)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para editar EMPRESA!',
          [
            'model' => $company,
            'lists' => Company::getLists(),
          ],
          false
        );
    }

	/**
	 * Show the form for duplicating the specified resource.
	 *
	 * @param \App\Company  $company	 * @return \Illuminate\Http\Response
	 */
	public function duplicate($companyId)
	{
        // user_can(['company.duplicate']);

        $company = Company::with(Company::getRelationships())->findOrFail($companyId);
        $company->id = null;
                        $company->comp_phone_ids = collect($company->compPhones)->pluck('id');
                                        $company->comp_address_ids = collect($company->compAddresses)->pluck('id');
                                        $company->comp_contact_ids = collect($company->compContacts)->pluck('id');
                                        $company->comp_responsability_ids = collect($company->compResponsabilities)->pluck('id');
                        
        return $this->responseSuccess(
          'Formulario para duplicar EMPRESA!',
          [
            'model' => $company,
            'lists' => Company::getLists(),
          ],
          false
        );
	}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company     * @return \Illuminate\Http\Response
     */
    public function update($companyId, Request $request)
    {

        // user_can(['company.update']);

        $company = Company::findOrFail($companyId);

        $this->varidate($request, $company);

        $input = $request->input('model');

                                                                                                                        
        DB::beginTransaction();
        try {
          //update data
          $company->update($input);

          //sync(attach/detach)
          if ($request->get('pivots')) {
            $this->sync($request->get('pivots'), $company);
          }

            if (isset($input['comp_phones']) && count($input['comp_phones'])) {
                \App\Models\CompPhone::where('company_id', $companyId)
                    ->update(['company_id' => null]);
                foreach ($input['comp_phones'] as $compPhone) {
                  \App\Models\CompPhone::find($compPhone['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_addresses']) && count($input['comp_addresses'])) {
                \App\Models\CompAddress::where('company_id', $companyId)
                    ->update(['company_id' => null]);
                foreach ($input['comp_addresses'] as $compAddress) {
                  \App\Models\CompAddress::find($compAddress['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_contacts']) && count($input['comp_contacts'])) {
                \App\Models\CompContact::where('company_id', $companyId)
                    ->update(['company_id' => null]);
                foreach ($input['comp_contacts'] as $compContact) {
                  \App\Models\CompContact::find($compContact['id'])->update(['company_id' => $company->id]);
                }
            }
            if (isset($input['comp_responsabilities']) && count($input['comp_responsabilities'])) {
                \App\Models\CompResponsability::where('company_id', $companyId)
                    ->update(['company_id' => null]);
                foreach ($input['comp_responsabilities'] as $compResponsability) {
                  \App\Models\CompResponsability::find($compResponsability['id'])->update(['company_id' => $company->id]);
                }
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
          'EMPRESA actualizado!',
          $company->toArray(),
          false,
          false,
          202
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company     * @return \Illuminate\Http\Response
     */
    public function destroy($companyId)
    {

        // user_can(['company.destroy']);

        $company = Company::findOrFail($companyId);
        $company->delete();
        return $this->responseSuccess(
          'EMPRESA eliminado!',
          $company->toArray(),
          false,
          false,
          203
        );
    }

    /**
     * Varidate input data.
     *
     * @return array
     */
    public function varidate(Request $request, Company $company = null)
    {
        $request->validate(Company::getValidateRule($company));
    }

    /**
     * sync pivot data
     *
     * @return void
     */
    public function sync($pivots_data, Company $company)
    {
        foreach( $pivots_data as $pivot_child_model_name => $pivots ){

            $pivotIds = [];
            // remove 'id'
            foreach($pivots as &$value){
                if( array_key_exists('id', $value) ){
                    $pivotIds[] = $value['id'];
                    unset($value['id']);
                }
            }
            unset($value);

            $method = Str::camel( Str::plural($pivot_child_model_name) );
            $company->$method()->sync($pivotIds);
        }
    }


// end section

}
