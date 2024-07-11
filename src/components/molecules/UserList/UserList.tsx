import { memo } from "react";
import { IUser } from "../../../interfaces/data";
import UserItem from "../../atomics/UserItem/UserItem";
import styles from "./UserList.module.scss";

const UserList = ({ users }: { users: IUser[] }) => {
    return (
        <ul className={styles.UserList}>
            {users.map((user: IUser) => (
                <UserItem user={user} key={user.id} />
            ))}
        </ul>
    );
};

export default memo(UserList);
