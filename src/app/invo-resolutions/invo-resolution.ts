import {InvoInvoice} from "../invo-invoices/invo-invoice";

export interface InvoResolution {
    id?: any,
    type?: any,
    number?: any,
    date_from?: any,
    date_to?: any,
    months?: any,
    initial?: any,
    final?: any,
    created_at?: any,
    updated_at?: any,
    deleted_at?: any,
    current_number?: any,
    invo_invoices?: InvoInvoice[],
}

export interface InvoResolutionLists {

}
