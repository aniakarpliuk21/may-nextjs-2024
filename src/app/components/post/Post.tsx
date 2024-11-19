import React, {FC} from 'react';
import styles from './Post.module.css';
import {IPost} from "@/app/models/IPost";
import Link from "next/link";
type TypeProps = {
    post:IPost
}
const Post:FC<TypeProps> = ({post}) => {
    return (
        <div className={styles.post}>
            <Link href={'/posts/' + post.id}>{post.id}.{post.title}</Link>
    <span>UserId - {post.userId}</span>
    <span>{post.body}</span>
        </div>
    );
};

export default Post;