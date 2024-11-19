import React from 'react';
import {postService} from "@/app/services/api.services";
import Post from "@/app/components/post/Post";
type Params = {
    id: string | number;
}
const PostPage = async ({params}:{params:Params}) => {
    const post = await postService.getPostById(params.id)
    return (
        <div>
            <Post post={post}/>
        </div>
    );
};

export default PostPage;