import React, {FC} from 'react';
import {IComment} from "@/app/models/IComment";
import Comment from "@/app/components/comment/Comment";
type TypeProps = {
    comments: IComment[];
}
const Comments:FC<TypeProps> = ({comments}) => {
    return (
        <div className={'goldFlexWrap'}>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;