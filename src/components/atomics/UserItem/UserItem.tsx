import { memo } from "react";
import { IUser } from "../../../interfaces/data";
import styles from "./UserItem.module.scss";

const UserItem = ({ user }: { user: IUser }) => {
    const { username, email, phone } = user;
    return (
        <li className={styles.UserItem}>
            <p
                className={`${styles.UserItem__text} ${styles.UserItem__text_bold}`}
            >
                {username}
            </p>
            <p className={styles.UserItem__text}>email: {email}</p>
            <p className={styles.UserItem__text}>phone: {phone}</p>
        </li>
    );
};

export default memo(UserItem);
