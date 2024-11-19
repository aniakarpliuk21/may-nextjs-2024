import React, {FC} from 'react';
import {IUser} from "@/app/models/IUser";
import User from "@/app/components/user/User";
type TypeProps = {
    users:IUser[];
}
const Users:FC<TypeProps> = ({users}) => {
    return (
        <div>
            <div className={'goldFlexWrap'}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Users;