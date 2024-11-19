import React, {FC} from 'react';
import {IComment} from "@/app/models/IComment";
import styles from './Comment.module.css';
import Link from "next/link";

type TypeProps = {
    comment:IComment
}
const Comment:FC<TypeProps> = ({comment}) => {
    return (
        <div className={styles.comment}>
            <Link href={'/comments/' + comment.id}>{comment.id}.{comment.name}</Link>
            <span>{comment.body}</span>
        </div>
    );
};

export default Comment;