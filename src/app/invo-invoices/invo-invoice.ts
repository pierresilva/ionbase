import {VisiVisitorRegister} from "../visitors/visi-visitor-register";
import {VisiVisitor} from "../visitors/visi-visitor";
import {InvoProduct} from "./invo-product";
import {InvoResolution} from "../invo-resolutions/invo-resolution";

export interface InvoInvoice {
    IVA?: any,
    created_at?: any,
    date?: any,
    deleted_at?: any,
    document?: any,
    document_type?: any,
    firstname?: any,
    id?: any,
    invo_invoice_id?: any,
    invo_resolution_id?: any,
    lastname?: any,
    number?: any,
    observations?: any,
    total?: any,
    invo_products?: InvoProduct[],
    visi_visitor?: VisiVisitor,
    invo_resolution?: InvoResolution,
    visi_visitor_register?: VisiVisitorRegister,
}
