import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
    return createPortal(
        <button className={styles.ModalOverlay} onClick={onClose}>
            <div className={styles.Modal}>
                <div className={styles.Modal__container}>{children}</div>
            </div>
        </button>,
        document.body
    );
};

export default Modal;
