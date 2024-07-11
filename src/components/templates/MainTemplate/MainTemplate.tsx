import styles from "./MainTemplate.module.scss";

interface MainTemplateProps {
    children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
    return <div className={styles.MainTemplate}>{children}</div>;
};

export default MainTemplate;
