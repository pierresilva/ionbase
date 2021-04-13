import {InvoInvoice} from "./invo-invoice";

export interface InvoProduct {
    id?: any,
    product?: any,
    quantity?: any,
    subtotal?: any,
    IVA?: any,
    observations?: any,
    created_at?: any,
    updated_at?: any,
    deleted_at?: any,
    invo_invoice_id?: any,
    invo_invoice?: InvoInvoice
}
