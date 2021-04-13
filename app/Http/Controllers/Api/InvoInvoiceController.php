<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\InvoInvoice;
use Illuminate\Http\Request;

class InvoInvoiceController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // user_can(['invo_invoice.index']);

        // $invoInvoices = new InvoInvoice;
        $invoInvoices = InvoInvoice::with(InvoInvoice::getRelationships());

        // (1)filltering
        $invoInvoices = $this->filtering($request, $invoInvoices);
        $invoInvoices = $invoInvoices->get();

        // (2)sort
        $invoInvoices = $this->sorting($request, $invoInvoices);

        // (3)paginate
        if (!$request->get('all')) {
            $invoInvoices = $invoInvoices->paginate($request->get('perPage') ?? 10);
        } else {
            $invoInvoices = $invoInvoices->get();
        }

        $resource = $invoInvoices->toArray();

        $resource['lists'] = InvoInvoice::getLists();

        return $this->responseSuccess(
            'Facturas obtenidos!',
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // user_can(['invo_invoice.show']);

        $invoInvoice = InvoInvoice::with(InvoInvoice::getRelationships())->findOrFail($id);

        $resource = $invoInvoice->toArray();
        $resource['lists'] = InvoInvoice::getLists();

        return $this->responseSuccess(
            'Factura obtenida!',
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
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
