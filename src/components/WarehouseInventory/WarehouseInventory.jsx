import "./WarehouseInventory.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import InventoryList from "../InventoryList/InventoryList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function WarehouseInventory() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const serverInventoryUrl = "http://localhost:8080/api/inventories";
  const serverWarehouseUrl = "http://localhost:8080/api/warehouses";

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(serverInventoryUrl);
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(serverWarehouseUrl);
        setWarehouses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventory();
    fetchWarehouses();
  }, []);

  const handleAddClick = (event) => {
    event.preventDefault();
    navigate("/inventory/add");
  };

  return (
    <div className="warehouse-inventory">
      <section className="inventory-header">
        <h1 className="inventory-header__title">Inventory</h1>
        <div className="search">
          <input
            type="text"
            name="inventory-search"
            id="inventory-search"
            className="search__input"
            placeholder="Search..."
          />
          <img src={searchIcon} alt="search icon" className="search__icon" />
        </div>
        <button
          onClick={handleAddClick}
          className="inventory-header__add-button"
        >
          + Add New Item
        </button>
      </section>
      <InventoryList inventory={inventory} warehouses={warehouses} />
    </div>
  );
}

export default WarehouseInventory;
