import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventoryForm.scss";

const EditInventoryForm = ({ warehouseFilter, inventoryToDisplay }) => {
  const [updatedMessage, setUpdatedMessage] = useState("");

  const initWarehouseName = warehouseFilter.find(
    (warehouse) => warehouse.id === inventoryToDisplay.warehouse_id
  );

  const [warehouseName, setWarehouseName] = useState(
    initWarehouseName ? initWarehouseName.warehouse_name : ""
  );
  const [itemName, setItemName] = useState(inventoryToDisplay.item_name || "");
  const [description, setDescription] = useState(
    inventoryToDisplay.description || ""
  );
  const [category, setCategory] = useState(inventoryToDisplay.category || "");
  const [status, setStatus] = useState(inventoryToDisplay.status || "In Stock");
  const [quantity, setQuantity] = useState(inventoryToDisplay.quantity || 0);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleWarehouseNameChange = (event) =>
    setWarehouseName(event.target.value);
  const handleItemNameChange = (event) => setItemName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  const handleStatusChange = (event) => {
    if (event.target.checked) {
      setStatus(event.target.value);
      if (event.target.value === "Out of Stock") {
        setQuantity(0);
      }
    }
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/inventory");
  };

  const handleUpdateSaved = async (event) => {
    event.preventDefault();
    const selectedWarehouse = warehouseFilter.find(
      (warehouse) => warehouse.warehouse_name === warehouseName
    );

    if (!selectedWarehouse) {
      setUpdatedMessage("Invalid warehouse name selected");
      return;
    }

    const urlForInventoryUpdate = `http://localhost:8080/api/inventories/${id}`;

    try {
      const response = await axios.put(urlForInventoryUpdate, {
        warehouse_id: selectedWarehouse.id,
        item_name: itemName,
        description: description,
        category: category,
        status: status,
        quantity: status === "Out of Stock" ? 0 : quantity,
      });

      setUpdatedMessage("Inventory item updated successfully");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setUpdatedMessage("An error occurred while updating the inventory item");
    }
  };

  return (
    <div className="inventory-edit-form-top">
      <Link to="/inventory">
        <div className="inventory-edit-form-top__nav-div">
          <img src={arrowBack} alt="Arrow back" />
          <h2>Edit Inventory Item</h2>
        </div>
      </Link>
      <form onSubmit={handleUpdateSaved} className="inventory-edit-form">
        <div className="inventory-edit-form__item-details">
          <h2 className="inventory-edit-form__main-header">Item Details</h2>
          <div>
            <label className="inventory-edit-form__headings" htmlFor="name">
              Item Name
            </label>
            <input
              type="text"
              value={itemName}
              onChange={handleItemNameChange}
              className="inventory-edit-form__name"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label
              className="inventory-edit-form__headings"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="inventory-edit-form__description"
              id="description"
              name="description"
            />
          </div>
          <div>
            <label className="inventory-edit-form__headings" htmlFor="category">
              Category
            </label>
            <select
              onChange={handleCategoryChange}
              className="inventory-edit-form__category"
              name="categories"
              id="category"
              value={category}
            >
              <option value="Health">Health</option>
              <option value="Gear">Gear</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
        <div className="inventory-edit-form__item-availability">
          <h2 className="inventory-edit-form__main-header">
            Item Availability
          </h2>
          <div className="inventory-edit-form__status-container">
            <div>
              <label className="inventory-edit-form__headings">Status</label>
              <div className="inventory-edit-form__everything-radio-container">
                <div className="inventory-edit-form__radio-container">
                  <input
                    type="radio"
                    id="in-stock"
                    name="in-out-stock"
                    value="In Stock"
                    checked={status === "In Stock"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="inventory-edit-form__label"
                    htmlFor="in-stock"
                  >
                    In stock
                  </label>
                </div>
                <div className="inventory-edit-form__radio-container">
                  <input
                    type="radio"
                    id="out-of-stock"
                    name="in-out-stock"
                    value="Out of Stock"
                    checked={status === "Out of Stock"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="inventory-edit-form__label"
                    htmlFor="out-of-stock"
                  >
                    Out of stock
                  </label>
                </div>
              </div>
            </div>
            <div className="inventory-edit-form__quantity-container">
              <label
                hidden={status === "Out of Stock"}
                className="inventory-edit-form__headings"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                hidden={status === "Out of Stock"}
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                className="inventory-edit-form__quantity"
                id="quantity"
              />
            </div>
            <div>
              <label
                className="inventory-edit-form__headings"
                htmlFor="warehouse"
              >
                Warehouse
              </label>
              <select
                onChange={handleWarehouseNameChange}
                className="inventory-edit-form__warehouse"
                name="categories"
                id="warehouse"
                value={warehouseName}
              >
                {warehouseFilter.map((warehouse, index) => (
                  <option key={index} value={warehouse.warehouse_name}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
            </div>
            <p className="inventory-edit-form__message">{updatedMessage}</p>
          </div>
        </div>
        <div className="inventory-edit-form__button-container">
          <button
            onClick={handleCancelClick}
            className="inventory-edit-form__cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateSaved}
            type="submit"
            className="inventory-edit-form__save-button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventoryForm;