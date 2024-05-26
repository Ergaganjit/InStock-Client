import "./AddInventoryForm.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

const AddInventoryForm = () => {
  const navigate = useNavigate();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);
  const [values, setValues] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then(({ data }) => setWarehouseList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleStatusChange = (event) => {
    if (event.target.checked) {
      setValues((prevValues) => ({
        ...prevValues,
        status: event.target.value,
        quantity: event.target.value === "Out of Stock" ? 0 : "",
      }));
    }
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    navigate("/inventory");
  };

  const handleUpdateSaved = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/inventories", values)
      .then(({ data }) =>
        setConfirmationMessage(`${data.item_name} added to inventory!`)
      )
      .catch((error) => {
        console.log(error);
        setConfirmationMessage(
          `Unable to add ${values.item_name} to inventory!`
        );
      });
  };

  return (
    <div className="inventory-add-form-top">
      <Link to="/inventory">
        <div className="inventory-add-form-top__nav-div">
          <img src={arrowBack} alt="Arrow back" />
          <h2>Add Inventory Item</h2>
        </div>
      </Link>

      <form onSubmit={handleUpdateSaved} className="inventory-add-form">
        <div className="inventory-add-form__item-details">
          <h2 className="inventory-add-form__main-header">Item Details</h2>
          <div>
            <label className="inventory-add-form__headings" htmlFor="item_name">
              Item Name
            </label>
            <input
              type="text"
              value={values.item_name}
              onChange={handleInputChange}
              className="inventory-add-form__name"
              id="item_name"
              name="item_name"
              placeholder="Item Name"
            />
          </div>
          <div>
            <label
              className="inventory-add-form__headings"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={values.description}
              onChange={handleInputChange}
              className="inventory-add-form__description"
              id="description"
              name="description"
              placeholder="Please enter a brief item description..."
            />
          </div>
          <div>
            <label className="inventory-add-form__headings" htmlFor="category">
              Category
            </label>
            <select
              onChange={handleInputChange}
              className="inventory-add-form__category"
              name="category"
              id="category"
            >
              <option value="">Please Select</option>
              <option value="Health">Health</option>
              <option value="Gear">Gear</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>

        <div className="inventory-add-form__item-availability">
          <h2 className="inventory-add-form__main-header">Item Availability</h2>
          <div className="inventory-add-form__status-container">
            <div>
              <label className="inventory-add-form__headings">Status</label>
              <div className="inventory-add-form__everything-radio-container">
                <div className="inventory-add-form__radio-container">
                  <input
                    type="radio"
                    id="in-stock"
                    name="in-out-stock"
                    value="In Stock"
                    checked={values.status === "In Stock"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="inventory-add-form__label"
                    htmlFor="in-stock"
                  >
                    In stock
                  </label>
                </div>
                <div className="inventory-add-form__radio-container">
                  <input
                    type="radio"
                    id="out-of-stock"
                    name="in-out-stock"
                    value="Out of Stock"
                    checked={values.status === "Out of Stock"}
                    onChange={handleStatusChange}
                  />
                  <label
                    className="inventory-add-form__label"
                    htmlFor="out-of-stock"
                  >
                    Out of stock
                  </label>
                </div>
              </div>
            </div>
            <div className="inventory-add-form__quantity-container">
              <label
                hidden={values.status === "Out of Stock"}
                className="inventory-add-form__headings"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                hidden={values.status === "Out of Stock"}
                type="text"
                value={values.quantity}
                onChange={handleInputChange}
                className="inventory-add-form__quantity"
                id="quantity"
                name="quantity"
                placeholder="Insert Quantity"
              />
            </div>
            <div>
              <label
                className="inventory-add-form__headings"
                htmlFor="warehouse"
              >
                Warehouse
              </label>
              <select
                onChange={handleInputChange}
                className="inventory-add-form__warehouse"
                name="warehouse_id"
                id="warehouse_id"
              >
                <option value="">Please Select</option>
                {warehouseList.map((warehouse, index) => (
                  <option key={index} value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
              <p className="inventory-add-form__message">
                {confirmationMessage}
              </p>
            </div>
          </div>
        </div>

        <div className="inventory-add-form__button-container">
          <button
            onClick={handleCancelClick}
            className="inventory-add-form__cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="inventory-add-form__add-button">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventoryForm;
