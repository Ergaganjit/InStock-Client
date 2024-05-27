// src/pages/WarehousePage.jsx

import React, { useState, useEffect } from 'react';
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from '../../components/DeleteWarehouseModal/DeleteWarehouseModal';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WarehousePage = () => {
  const urlForWarehouseList = "http://localhost:8080/api/warehouses";

  const [warehouseToDisplay, setwarehouseToDisplay] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  useEffect(() => {
    axios
      .get(urlForWarehouseList)
      .then((response) => {
        setwarehouseToDisplay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigateNewWarehousePage = useNavigate();

  const handleNewClick = () => {
    navigateNewWarehousePage("/warehouse/add");
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
      setwarehouseToDisplay(warehouseToDisplay.filter(wh => wh.id !== warehouseToDelete.id));
      closeModal();
    } catch (error) {
      console.error('Error deleting warehouse', error);
    }
  };

  return (
    <div className="warehouse">
      <div className="warehouse__everything-container">
        <div className="warehouse__container">
          <h2 className="warehouse__heading">Warehouses</h2>
          <div className="warehouse__search-add-container">
            <input
              className="warehouse__search-box"
              type="text"
              placeholder="Search..."
            ></input>
            <button
            onClick={handleNewClick}
            className="button button--primary">
              + Add New Warehouse
            </button>
          </div>
        </div>

        <div className="warehouse__columns">
          <p className="warehouse__title-warehouse">WAREHOUSE</p>
          <p className="warehouse__address">ADDRESS</p>
          <p className="warehouse__contact-name">CONTACT NAME</p>
          <p className="warehouse__contact-info">CONTACT INFORMATION</p>
          <p className="warehouse__actions">ACTIONS</p>
        </div>
            <WarehouseList
        warehouses={warehouseToDisplay}
        openModal={openModal}
      />
      <DeleteWarehouseModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        warehouseToDelete={warehouseToDelete}
        deleteWarehouse={deleteWarehouse}
      />
      </div>
    </div>
  );
};

export default WarehousePage;
