import { Post } from "../posts/post";

export interface Category {

    id?: any;
    name?: any,
    post_ids?: any[],
    posts?: Post[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CategoryLists {

    Post?: Post[],

}
