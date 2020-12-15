import { SettingGroup } from "../setting-groups/setting-group";

export interface Setting {

    id?: any;
    name?: any,
    code?: any,
    value?: any,
    rich_text?: any,
    setting_group_id?: any,
    setting_group?: SettingGroup,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface SettingLists {

    SettingGroup?: SettingGroup[],

}
