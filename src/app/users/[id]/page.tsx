import React from 'react';
import {userService} from "@/app/services/api.services";
import User from "@/app/components/user/User";
type Params = {
    id:string | number;
}
const UserPage = async ({params}:{params:Params}) => {
    const user =  await userService.getUserById(params.id)
    return (
        <div>
            <User user={user}/>
        </div>
    );
};

export default UserPage;