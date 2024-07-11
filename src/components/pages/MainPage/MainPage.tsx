import { useEffect, useState, useCallback } from "react";
import UserList from "../../molecules/UserList/UserList";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import styles from "./MainPage.module.scss";
import * as api from "../../../api/api";
import { IError, IUser } from "../../../interfaces/data";
import Loading from "../../atomics/Loading/Loading";
import Modal from "../../organisms/Modal/Modal";
import SearchBar from "../../atomics/SearchBar/SearchBar";

const MainPage = () => {
    const limit = 9;
    const [users, setUsers] = useState<IUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<IError>({
        isError: false,
        message: "",
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await api.getUsers(limit);
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                setError({ isError: true, message: (error as Error).message });
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [limit]);

    const handleSearch = useCallback(
        (query: string) => {
            const filtered = users.filter(
                (user) =>
                    user.username.toLowerCase().includes(query.toLowerCase()) ||
                    user.email.toLowerCase().includes(query.toLowerCase()) ||
                    user.phone.includes(query)
            );
            setFilteredUsers(filtered);
        },
        [users]
    );

    return (
        <MainTemplate>
            {error.isError && (
                <Modal
                    onClose={() => setError({ isError: false, message: "" })}
                >
                    <p>{error.message}</p>
                </Modal>
            )}
            <main className={styles.MainPage}>
                <h1 className={styles.MainPage__title}>Users</h1>
                <SearchBar onSearch={handleSearch} />
                {isLoading ? (
                    <Loading />
                ) : filteredUsers.length > 0 ? (
                    <UserList users={filteredUsers} />
                ) : (
                    <p className={styles.MainPage__nothingfound}>
                        Nothing found...
                    </p>
                )}
            </main>
        </MainTemplate>
    );
};

export default MainPage;
