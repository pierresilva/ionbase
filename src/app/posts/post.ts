import { User } from "../users/user";
import { Category } from "../categories/category";
import { Tag } from "../tags/tag";
import { Comment } from "../comments/comment";
import { Image } from "../images/image";

export interface Post {

    id?: any;
    name?: any,
    summary?: any,
    user_id?: any,
    category_id?: any,
    published?: any,
    from_date?: any,
    to_date?: any,
    accepted?: any,
    promotion_date?: any,
    promotion_image?: any,
    content?: any,
    code?: any,
    status?: any,
    user?: User,
    category?: Category,
    tag_ids?: any[],
    tags?: Tag[],
    comment_ids?: any[],
    comments?: Comment[],
    image_ids?: any[],
    images?: Image[],
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface PostLists {

    User?: User[],
    Category?: Category[],
    Tag?: Tag[],
    Comment?: Comment[],
    Image?: Image[],

}
