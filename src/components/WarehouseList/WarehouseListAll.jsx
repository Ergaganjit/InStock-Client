import "../WarehouseList/WarehouseList.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const WarehouseList = ({
  id,
  warehouseName,
  warehouseAddress,
  city,
  country,
  warehouseContact,
  warehousePhone,
  warehouseEmail,
  setWarehouseToDisplay,
  warehouses,
}) => {
  const navigate = useNavigate();
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  // Handle edit button click
  const handleEditClick = () => {
    navigate(`/warehouse/edit/${id}`);
  };

  // Handle delete button click
  const handleDeleteClick = () => {
    setIsDeleteConfirmVisible(true);
  };

  // Handle delete confirmation
  const confirmDelete = () => {
    // Perform delete operation here
    setIsDeleteConfirmVisible(false);
    // Update displayed warehouses after deletion
    setWarehouseToDisplay(
      warehouses.filter((warehouse) => warehouse.id !== id)
    );
  };

  // Handle cancel delete
  const cancelDelete = () => {
    setIsDeleteConfirmVisible(false);
  };

  return (
    <div className="warehouse">
      <div className="warehouse__details">
        <p className="warehouse__label">WAREHOUSE</p>
        <NavLink className="warehouse__name-link" to={`/warehouse/${id}`}>
          <div className="warehouse__name-container">
            <p className="warehouse__name">{warehouseName}</p>
            <img
              className="warehouse__arrow"
              src={arrowRight}
              alt="Arrow Right"
            />
          </div>
        </NavLink>
        <p className="warehouse__label">ADDRESS</p>
        <p className="warehouse__address">{`${warehouseAddress}, ${city}, ${country}`}</p>
      </div>

      <div className="warehouse__contact">
        <p className="warehouse__label">CONTACT NAME</p>
        <p className="warehouse__contact-name">{warehouseContact}</p>
        <p className="warehouse__label">CONTACT INFORMATION</p>
        <div className="warehouse__contact-info">
          <p className="warehouse__phone">{warehousePhone}</p>
          <p className="warehouse__email">{warehouseEmail}</p>
        </div>
      </div>

      <div className="warehouse__actions">
        <img
          className="warehouse__icon"
          onClick={handleDeleteClick}
          src={deleteIcon}
          alt="Delete Icon"
        />
        <img
          className="warehouse__icon"
          onClick={handleEditClick}
          src={editIcon}
          alt="Edit Icon"
        />
      </div>

      {isDeleteConfirmVisible && (
        <div className="warehouse__delete-confirm">
          <p>Are you sure you want to delete {warehouseName}?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default WarehouseList;
