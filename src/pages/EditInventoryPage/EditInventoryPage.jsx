import EditInventoryForm from "../../components/EditInventoryForm/EditInventoryForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditInventoryPage = () => {
  const [inventoryToDisplay, setInventoryToDisplay] = useState(null);
  const [warehouseToDisplay, setWarehouseToDisplay] = useState(null);

  const { id } = useParams();
  const urlForInventoryItem = `http://localhost:8080/api/inventories/${id}`;
  const urlForWarehouseList = "http://localhost:8080/api/warehouses";

  useEffect(() => {
    axios
      .get(urlForInventoryItem)
      .then((response) => setInventoryToDisplay(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(urlForWarehouseList)
      .then((response) => setWarehouseToDisplay(response.data))
      .catch((err) => console.log(err));
  }, []);

  // if (!inventoryToDisplay || !warehouseToDisplay) {
  //   return <div>Loading...</div>;
  // }

  const warehouseFilter = warehouseToDisplay.map((warehouse) => ({
    warehouse_name: warehouse.warehouse_name,
    id: warehouse.id,
  }));

  return (
    <div className="inventory">
      <EditInventoryForm
        warehouseFilter={warehouseFilter}
        inventoryToDisplay={inventoryToDisplay}
      />
    </div>
  );
};

export default EditInventoryPage;
