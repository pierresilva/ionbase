import { Post } from "../posts/post";

export interface Image {

    id?: any;
    name?: any,
    url?: any,
    post_ids?: any[],
    posts?: Post[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface ImageLists {

    Post?: Post[],

}
