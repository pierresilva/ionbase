import {SettingGroup} from "../setting-groups/setting-group";

export interface Setting {
    id?: any,
    created_at?: any,
    updated_at?: any,
    setting_group_id?: any,
    name?: any,
    code?: any,
    value?: any,
    rich_text?: any,
    group?: SettingGroup,
}
