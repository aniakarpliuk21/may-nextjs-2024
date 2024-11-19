import React, {FC} from 'react';
import styles from './User.module.css'
import {IUser} from "@/app/models/IUser";
import Link from "next/link";
type TypeProps = {
    user:IUser
}
const User:FC<TypeProps> = ({user}) => {
    return (
        <div className={styles.user}>
            <Link href={'/users/' + user.id}>{user.id}.{user.name}</Link>
            <span>Username - {user.username}</span>
            <span>Email - {user.email}</span>
            <span>Phone - {user.phone}</span>
            <span>Website -{user.website}</span>
        </div>
    );
};

export default User;