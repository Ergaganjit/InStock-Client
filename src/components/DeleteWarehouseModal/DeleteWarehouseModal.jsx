// src/components/DeleteWarehouseModal/DeleteWarehouseModal.jsx

import React from 'react';
import Modal from 'react-modal';
import './DeleteWarehouseModal.scss';

const DeleteWarehouseModal = ({ isOpen, onRequestClose, warehouseToDelete, deleteWarehouse }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Delete {warehouseToDelete?.warehouse_name} Warehouse?</h2>
        <button className="close-button" onClick={onRequestClose}>X</button>
      </div>
      <p>Please confirm that you'd like to delete the {warehouseToDelete?.warehouse_name} warehouse from the list of warehouses. You won't be able to undo this action.</p>
      <div className="modal-buttons">
        <button onClick={onRequestClose}>Cancel</button>
        <button onClick={deleteWarehouse}>Delete</button>
      </div>
    </Modal>
  );
};

export default DeleteWarehouseModal;
