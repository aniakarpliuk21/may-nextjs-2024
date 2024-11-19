import React, {FC} from 'react';
import {IPost} from "@/app/models/IPost";
import Post from "@/app/components/post/Post";
type TypeProps = {
    posts: IPost[];
}
const Posts:FC<TypeProps> = ({posts}) => {
    return (
        <div className={'goldFlexWrap'}>
        {
            posts.map(post => <Post key={post.id} post={post}/>)
        }
        </div>
    );
};

export default Posts;