// src/components/DeleteWarehouseModal.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './DeleteWarehouseModal.scss';

const DeleteWarehouseModal = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/warehouses');
      console.log("response is", response.data);
      setWarehouses(response.data);
    } catch (error) {
      console.error('Error fetching warehouses', error);
    }
  };

  const openModal = (warehouse) => {
    setWarehouseToDelete(warehouse);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setWarehouseToDelete(null);
  };

  const deleteWarehouse = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/warehouses/${warehouseToDelete.id}`);
      setWarehouses(warehouses.filter(wh => wh.id !== warehouseToDelete.id));
      closeModal();
    } catch (error) {
      console.error('Error in deleting warehouse', error);
    }
  };

  return (
    <div className="warehouse-list">
      <h1>Warehouses</h1>
      <ul>
        {warehouses.map(warehouse => (
          <li key={warehouse.id}>
            {warehouse.warehouse_name} <br /> 
            {warehouse.address}<br />
            {warehouse.city}<br />
            {warehouse.country}
            <button onClick={() => openModal(warehouse)}>🗑️</button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className="modal"
        overlayClassName="overlay" // Added overlay class
      >
        <div className="modal-header">
          <h2>Delete {warehouseToDelete?.warehouse_name} Warehouse?</h2>
          <button className="close-button" onClick={closeModal}>X</button> {/* Close button */}
        </div>
        <p>Please confirm that you'd like to delete the {warehouseToDelete?.warehouse_name} warehouse from the list of warehouses. You won't be able to undo this action.</p>
        <div className="modal-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteWarehouse}>Delete</button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteWarehouseModal;
