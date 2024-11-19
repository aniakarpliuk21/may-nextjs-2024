import React from 'react';
import {commentService} from "@/app/services/api.services";
import Comment from "@/app/components/comment/Comment";
type Params = {
    id:string | number;
}
const CommentPage = async ({params}:{params:Params}) => {
    const comment = await commentService.getCommentById(params.id);
    return (
        <div>
            <Comment comment={comment}/>
        </div>
    )
};

export default CommentPage;