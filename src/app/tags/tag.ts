import { Post } from "../posts/post";

export interface Tag {

    id?: any;
    name?: any,
    post_ids?: any[],
    posts?: Post[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface TagLists {

    Post?: Post[],

}
