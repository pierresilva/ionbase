import { Post } from "../posts/post";

export interface Comment {

    id?: any;
    name?: any,
    body?: any,
    post_id?: any,
    post?: Post,
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface CommentLists {

    Post?: Post[],

}
