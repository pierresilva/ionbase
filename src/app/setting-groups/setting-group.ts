import { Setting } from "../settings/setting";

export interface SettingGroup {

    id?: any;
    name?: any,
    code?: any,
    setting_ids?: any[],
    settings?: Setting[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SettingGroupLists {

    Setting?: Setting[],

}
