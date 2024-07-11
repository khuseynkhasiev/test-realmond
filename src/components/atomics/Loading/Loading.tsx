import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Loading;
