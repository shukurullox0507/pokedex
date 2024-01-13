import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children:any;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <button onClick={onClose}>Close</button>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
