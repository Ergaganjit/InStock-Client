import "./InventoryDetails.scss";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
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

  const statusClass = inventoryItem.status === 'In Stock' ? 'status-in-stock' : 'status-out-of-stock';

  return (
    <>
<div className="inventory-details">
  <div className="inventory-details__nav">
    <Link to="/inventory">
      <img className="back-button__image" src={backArrow} />
    </Link>
    <h1 className="nav__inventory-item-heading">{inventoryItem.item_name}</h1>
    <Link className="nav__edit-link" to={`/inventory/edit/${id}`}>
        <button className="edit-link__edit-button">
          <img className="edit-button__image" src={editIcon} alt="edit icon" />
          <label className="edit-button__label">Edit</label>
        </button>
    </Link>
  </div>
  <div className="inventory-item-details">
    <div className="item-info-container">
      <div className="description">
        <h3 className="inventory-item-details__heading">ITEM DESCRIPTION:</h3>
        <p className="inventory-item-details__text">{inventoryItem.description}</p>
      </div>
      <div className="category">
        <h3 className="inventory-item-details__heading">CATEGORY:</h3>
        <p className="inventory-item-details__text">{inventoryItem.category}</p>
      </div>
    </div>
    <div className="warehouse-stock-container">
      <div className="stock-container">
        <div className="stock-status">
          <h3 className="inventory-item-details__heading">STATUS:</h3>
          <p className={`stock-status__status ${statusClass}`}>{inventoryItem.status}</p>
        </div>
        <div className="quantity">
          <h3 className="inventory-item-details__heading">QUANTITY:</h3>
          <p className="inventory-item-details__text">{inventoryItem.quantity}</p>
        </div>
      </div>
        <div className="warehouse">
          <h3 className="inventory-item-details__heading">WAREHOUSE:</h3>
          <p className="inventory-item-details__text">{inventoryItem.warehouse_name}</p>
        </div>
    </div>
  </div>
</div>
</>
  );
};

export default InventoryItemDetails;
