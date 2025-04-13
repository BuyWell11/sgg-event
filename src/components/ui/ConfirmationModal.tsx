import React from 'react';
import '../../styles/components/ConfirmationModal.scss';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Вы уверены, что хотите удалить?</h2>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Да
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
