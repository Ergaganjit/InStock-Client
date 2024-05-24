import './EditWarehouseForm.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function EditWarehouseForm() {

    const params = useParams();
    const navigate = useNavigate();

    const [wareHouseDetails, setWareHouseDetails] = useState(null);

    useEffect(() => {
        async function fetchWareHouseDetails() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/warehouses/${params.wareHouseId}`);
                setWareHouseDetails(response.data);
                console.log("Successfully fetched warehouse details.");
            } catch (error) {
                console.log("Error fetching warehouse details.");
            }
        }
        fetchWareHouseDetails();
    }, []);

    async function handleClick(button) {
        if (button === 'save') {
            try {
                console.log(wareHouseDetails);
                await axios.put(`${process.env.REACT_APP_API_URL}/api/warehouses/${params.wareHouseId}`, wareHouseDetails);
                console.log("Warehouse details updated successfully.");
                navigate(`/${params.wareHouseId}`);
            } catch (error) {
                console.log("Error updating warehouse details.");
            }
        } else if (button === 'cancel') {
            navigate(`/${params.wareHouseId}`);
        }
    }

    // TODO: add error handling for empty strings; phone and email validation; and do not send id
    function handleChange(e, key) {
        // e.preventDefault();
        // if (e.target.value.trim() === "") {
            
        // }
        setWareHouseDetails({
            ...wareHouseDetails,
            [key]: e.target.value
        });
    }

return (
    <div className="editWarehouseForm">

        <div className="editWarehouseForm__nav-container">
            <div className="editWarehouseForm__nav">
                <button className="nav__back-button">
                    <img className="back-button__image" src={backArrow} />
                </button>
                <h2 className="nav__heading">Edit Warehouse</h2>
            </div>
        </div>
<div className="editWarehouseForm__details-container">
    
            <div className="editWarehouseForm__warehouse-details">
                <h3 className="warehouse-details__heading">Warehouse Details</h3>
    
                <div className="warehouse-details__warehouse-name">
                    <label className="warehouse-name__label">Warehouse Name</label>
                    <input type="text" className="warehouse-name__input" value={wareHouseDetails?.warehouse_name} onChange={(e) => handleChange(e, "warehouse_name")}></input>
                </div>
    
                <div className="warehouse-details__street-address">
                    <label className="street-address__label">Street Address</label>
                    <input className="street-address__input" value={wareHouseDetails?.address} onChange={(e) => handleChange(e, "address")}></input>
                </div>
    
                <div className="warehouse-details__city">
                    <label className="city__label">City</label>
                    <input className="city__input" value={wareHouseDetails?.city} onChange={(e) => handleChange(e, "city")}></input>
                </div>
    
                <div className="warehouse-details__country">
                    <label className="country__label">Country</label>
                    <input className="country__input" value={wareHouseDetails?.country} onChange={(e) => handleChange(e, "country")}></input>
                </div>
            </div>
    
            <div className="editWarehouseForm__contact-details">
                <h3 className="contact-details__heading">Contact Details</h3>
    
                <div className="contact-details__contact-name">
                    <label className="contact-name__label">Contact Name</label>
                    <input className="contact-name__input" value={wareHouseDetails?.contact_name} onChange={(e) => handleChange(e, "contact_name")}></input>
                </div>
    
                <div className="contact-details__position">
                    <label className="position__label">Position</label>
                    <input className="position__input" value={wareHouseDetails?.contact_position} onChange={(e) => handleChange(e, "contact_position")}></input>
                </div>
    
                <div className="contact-details__phone-number">
                    <label className="phone-number__label">Phone Number</label>
                    <input className="phone-number__input" value={wareHouseDetails?.contact_phone} onChange={(e) => handleChange(e, "contact_phone")}></input>
                </div>
    
                <div className="contact-details__email">
                    <label className="email__label">Email</label>
                    <input className="email__input" value={wareHouseDetails?.contact_email} onChange={(e) => handleChange(e, "contact_email")}></input>
                </div>
            </div>
</div>

        <div className="editWarehouseForm__form-buttons">
            <button className="form-buttons__cancel-button" onClick={() => handleClick("cancel")}>Cancel</button>
            <button className="form-buttons__save-button" onClick={() => handleClick("save")}>Save</button>
        </div>
    </div>
);
}