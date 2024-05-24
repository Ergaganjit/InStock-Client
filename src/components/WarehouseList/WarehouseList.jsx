// src/components/WarehouseList/WarehouseList.jsx

import "./WarehouseList.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import { useNavigate, NavLink } from "react-router-dom";

const WarehouseList = ({ warehouses, openModal }) => {
  const navigateEditPage = useNavigate();

  const handleEditClick = (id) => {
    navigateEditPage(`/warehouse/edit/${id}`);
  };

  return (
    <>
      {warehouses.map((warehouse) => (
        <div key={warehouse.id} className="warehouse-info">
          <div className="warehouse-info__mobile-flex-first">
            <p className="warehouse-info__title-warehouse-heading">WAREHOUSE</p>
            <NavLink
              className="warehouse-info__name-container"
              to={`/warehouse/${warehouse.id}`}
            >
              <div className="warehouse-info__name-container">
                <p className="warehouse-info__name">
                  {warehouse.warehouse_name}
                </p>
                <img
                  className="warehouse-info__arrow"
                  src={arrowRight}
                  alt="Arrow Right"
                />
              </div>
            </NavLink>
            <p className="warehouse-info__address-heading">ADDRESS</p>
            <p className="warehouse-info__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
          </div>

          <div className="warehouse-info__mobile-flex-second">
            <p className="warehouse-info__contact-name-heading">CONTACT NAME</p>
            <p className="warehouse-info__contact-name">
              {warehouse.contact_name}
            </p>
            <p className="warehouse-info__contact-info-heading">
              CONTACT INFORMATION
            </p>
            <div className="warehouse-info__phone-email-container">
              <p className="warehouse-info__phone">{warehouse.contact_phone}</p>
              <p className="warehouse-info__email">{warehouse.contact_email}</p>
            </div>
          </div>

          <div className="warehouse-info__delete-edit">
            <img
              onClick={() => openModal(warehouse)}
              src={deleteIcon}
              alt="Delete Icon"
            />
            <img
              onClick={() => handleEditClick(warehouse.id)}
              src={editIcon}
              alt="Edit Icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default WarehouseList;
