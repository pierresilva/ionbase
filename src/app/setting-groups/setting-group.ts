import {Setting} from "../settings/setting";

export interface SettingGroup {
    id?: any,
    name?: any,
    code?: any,
    created_at?: any,
    updated_at?: any,
    settings?: Setting[],
}
