import {File} from "../files/file";

export interface BoarMessage {
    id?: any;
    name?: any;
    code?: any;
    file_id?: any;
    body?: any;
    notify_to_users?: any;
    notify_to_house_units?: any;
    status?: any;
    created_at?: any;
}

export interface BoarMessageLists {

    Files?: File[],

}
