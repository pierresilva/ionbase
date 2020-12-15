import { User } from "../users/user";
import { UserPermission } from "../user-permissions/user-permission";

export interface UserRole {

    id?: any;
    name?: any,
    code?: any,
    user_ids?: any[],
    users?: User[],
    user_permission_ids?: any[],
    user_permissions?: UserPermission[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface UserRoleLists {

    User?: User[],
    UserPermission?: UserPermission[],

}
