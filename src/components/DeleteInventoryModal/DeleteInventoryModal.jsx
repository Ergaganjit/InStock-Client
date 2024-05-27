import React from 'react';
import Modal from 'react-modal';
import './DeleteInventoryModal.scss';

const DeleteInventoryModal = ({ isOpen, onRequestClose, onDelete, inventoryToDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Delete {inventoryToDelete?.item_name} inventory item?</h2>
        <button className="close-button" onClick={onRequestClose}>X</button>
      </div>
      <p>Please confirm that you'd like to delete the {inventoryToDelete?.item_name} inventory from {inventoryToDelete?.warehouse_name}. You won't be able to undo this action.</p>
      <div className="modal-buttons">
        <button onClick={onRequestClose}>Cancel</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </Modal>
  );
};

export default DeleteInventoryModal;
