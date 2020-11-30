import { Post } from "../posts/post";

export interface User {

    id?: any;
    name?: any,
    email?: any,
    password?: any,
    post_ids?: any[],
    posts?: Post[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface UserLists {

    Post?: Post[],

}
