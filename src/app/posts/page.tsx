import React from 'react';
import {postService} from "@/app/services/api.services";
import Posts from "@/app/components/posts/Posts";

const PostsPage =  async () => {
    const posts = await postService.getAllPosts()
    return (
        <div>
            <Posts posts={posts} />
        </div>
    );
};

export default PostsPage;