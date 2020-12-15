import { UserRole } from "../user-roles/user-role";

export interface UserPermission {

    id?: any;
    name?: any,
    code?: any,
    user_role_ids?: any[],
    user_roles?: UserRole[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface UserPermissionLists {

    UserRole?: UserRole[],

}
