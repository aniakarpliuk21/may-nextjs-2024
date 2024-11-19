import React from 'react';
import {userService} from "@/app/services/api.services";
import Users from "@/app/components/users/Users";

const UsersPage = async () => {
    const users = await userService.getAllUsers();
    return (
        <div>
            <Users users={users} />
        </div>
    );
};

export default UsersPage;