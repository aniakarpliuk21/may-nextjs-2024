import React from 'react';
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Link href={'/users'}>Users</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/comments'}>Comments</Link>
        </div>
    );
};

export default Menu;