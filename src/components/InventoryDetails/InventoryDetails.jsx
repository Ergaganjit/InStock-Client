import "./InventoryItemDetails.scss";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from '../../assets/Icons/edit-24px.svg';

const InventoryItemDetails = () => {
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((response) => {
        setInventoryItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory item:", error);
      });
  }, [id]);

  if (!inventoryItem) {
    return <div>error</div>;
  }

  return (
    <div className="inventory-item-details">
      <Link to="/inventory">
        <img src={arrowBack} alt="Arrow back" />
      </Link>
      <h2>{inventoryItem.item_name}</h2>
      <p>Warehouse: {inventoryItem.warehouse_name}</p>
      <p>Description: {inventoryItem.description}</p>
      <p>Category: {inventoryItem.category}</p>
      <p>Status: {inventoryItem.status}</p>
      <p>Quantity: {inventoryItem.quantity}</p>
      <Link to={`/inventory/edit/${id}`}>
        <button className="edit-link__edit-button">
          <img className="edit-button__image" src={editIcon} alt="edit icon" />
          <label className="edit-button__label">Edit</label>
        </button>
      </Link>
    </div>
  );
};

export default InventoryItemDetails;