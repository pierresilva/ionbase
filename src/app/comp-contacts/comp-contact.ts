import { Company } from "../companies/company";
import { SystPosition } from "../syst-positions/syst-position";

export interface CompContact {

    id?: any;
    company_id?: any,
    syst_position_id?: any,
    name?: any,
    phone?: any,
    email?: any,
    main?: any,
    company?: Company,
    syst_position?: SystPosition,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CompContactLists {

    Company?: Company[],
    SystPosition?: SystPosition[],

}
