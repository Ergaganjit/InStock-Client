// src/components/DeleteInventoryModal.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './DeleteInventoryModal.scss';

const DeleteInventoryModal = () => {
  const [inventories, setInventories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inventoryToDelete, setInventoryToDelete] = useState(null);

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/inventories');
      console.log("response is", response.data);
      setInventories(response.data);
    } catch (error) {
      console.error('Error fetching inventories', error);
    }
  };

  const openModal = (inventory) => {
    setInventoryToDelete(inventory);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setInventoryToDelete(null);
  };

  const deleteInventory = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/inventories/${inventoryToDelete.id}`);
      setInventories(inventories.filter(inv => inv.id !== inventoryToDelete.id));
      closeModal();
    } catch (error) {
      console.error('Error deleting inventory', error);
    }
  };

  return (
    <div className="inventory-list">
      <h1>Inventories</h1>
      <ul>
        {inventories.map(inventory => (
          <li key={inventory.id}>
            {inventory.warehouse_id} <br /> 
            {inventory.item_name} <br /> 
            {inventory.description}<br />
            {inventory.category}<br />
            {inventory.status}<br/>
            {inventory.quantity}<br />
            {inventory.created_at}<br />
            {inventory.updated_at}<br />
            <button onClick={() => openModal(inventory)}>🗑️</button>
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
          <h2>Delete {inventoryToDelete?.item_name} inventory item?</h2>
          <button className="close-button" onClick={closeModal}>X</button> {/* Close button */}
        </div>
        <p>Please confirm that you'd like to delete the {inventoryToDelete?.item_name} inventory from the list of inventories. You won't be able to undo this action.</p>
        <div className="modal-buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteInventory}>Delete</button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteInventoryModal;
