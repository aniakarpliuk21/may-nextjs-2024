import {IUser} from "@/app/models/IUser";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";

const baseUrl = 'https://jsonplaceholder.typicode.com';
const urlBuilder = {
    user:{
        userBaseUrl:'/users',
        allUsers:() => baseUrl +urlBuilder.user.userBaseUrl,
        userById:(id:string | number) => baseUrl + urlBuilder.user.userBaseUrl + '/' + id
    },
    post:{
        postBaseUrl:'/posts',
        allPosts:() => baseUrl +urlBuilder.post.postBaseUrl,
        postById:(id:string | number) => baseUrl +urlBuilder.post.postBaseUrl + '/' + id
    },
    comment:{
        commentBaseUrl:'/comments',
        allComments:() => baseUrl + urlBuilder.comment.commentBaseUrl,
        commentById:(id:string | number) => baseUrl +urlBuilder.comment.commentBaseUrl + '/' + id
    }

}

const userService = {
    getAllUsers : async ():Promise<IUser[]> => {
        return (await fetch(urlBuilder.user.allUsers())
            .then(value => value.json()));
    },
    getUserById: async (id:string | number):Promise<IUser> => {
        return (await fetch(urlBuilder.user.userById(id))
            .then(value => value.json()));
    }
}

const postService = {
    getAllPosts : async ():Promise<IPost[]> => {
        return (await fetch(urlBuilder.post.allPosts())
            .then(value => value.json()));
    },
    getPostById : async (id:string | number):Promise<IPost> => {
        return (await fetch(urlBuilder.post.postById(id))
            .then(value => value.json()));
    }
}

const commentService = {
    getAllComments : async ():Promise<IComment[]> => {
        return  (await fetch(urlBuilder.comment.allComments())
        .then(value => value.json()));

    },
    getCommentById : async (id:string | number):Promise<IComment> => {
        return ( await fetch(urlBuilder.comment.commentById(id))
        .then(value => value.json()));
    }
}
export {
    userService,
    postService,
    commentService
}