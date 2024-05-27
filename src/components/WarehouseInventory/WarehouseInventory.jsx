import "./WarehouseInventory.scss";
// import searchIcon from "../../assets/Icons/search-24px.svg";
import InventoryList from "../InventoryList/InventoryList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function WarehouseInventory() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const serverBaseUrl = 'http://localhost:8080';
  const serverInventoryUrl = `${serverBaseUrl}/api/inventories`;

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(serverInventoryUrl);
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventory();
  }, []);

  const handleAddClick = (event) => {
    event.preventDefault();
    navigate("/inventory/add");
  };

  return (
    <div className="warehouse-inventory">
      <div className="warehouse-inventory__everything-container">
        <div className="warehouse-inventory__container">
          <h2 className="warehouse-inventory__heading">Inventory</h2>
          <div className="warehouse-inventory__search-add-container">
            <input
            type="text"
            name="inventory-search"
            id="inventory-search"
            className="warehouse-inventory__search-box"
            placeholder="Search..."
            />
            <button
            onClick={handleAddClick}
            className="button button--primary">
              + Add New Item
            </button>
          </div>
        </div>
      </div>
      <div>
      <InventoryList inventory={inventory} warehouses={warehouses} />
      </div>

    </div>
  );
};

export default WarehouseInventory;