import { OperMachine } from "../oper-machines/oper-machine";
import { OperContractor } from "../oper-contractors/oper-contractor";

export interface OperReplacement {
// model generated section
    id?: any;
    name?: any,
    oper_machine_id?: any,
    oper_contractor_id?: any,
    date?: any,
    time?: any,
    warranty?: any,
    oper_machine?: OperMachine,
    oper_contractor?: OperContractor,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
// end model generated section
}

export interface OperReplacementLists {
// lists generated section
    OperMachine?: OperMachine[],
    OperContractor?: OperContractor[],
// end lists generated section

}
