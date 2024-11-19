import React from 'react';
import {commentService} from "@/app/services/api.services";
import Comments from "@/app/components/comments/Comments";

const CommentsPage = async () => {
    const comments = await commentService.getAllComments();
    return (
        <div>
            <Comments comments={comments} />
        </div>
    );
};

export default CommentsPage;