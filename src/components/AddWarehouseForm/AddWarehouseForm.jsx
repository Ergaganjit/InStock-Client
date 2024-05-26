import './AddWarehouseForm.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function AddWarehouseForm() {

    const apiUrl = "http://localhost:8080";

    const params = useParams();
    const navigate = useNavigate();

    const [wareHouseDetails, setWareHouseDetails] = useState(null);
    const [error, setError] = useState({
        empty: true,
        emailInvalid: true,
        phoneInvalid: true
    });

    async function handleClick(button) {

        if (button === 'save' && !error.empty && !error.emailInvalid && !error.phoneInvalid) {
            try {
                console.log(wareHouseDetails);
                await axios.post(`${apiUrl}/api/warehouses`, wareHouseDetails);
                console.log("Warehouse added successfully.");
                navigate(`/`);
            } catch (error) {
                console.log("Error adding warehouse.");
            }
        } else if (button === 'cancel') {
            navigate(`/`);
        } else {
            alert("Please check all form fields.");
        }
    }

    function handleChange(e, key) {
        e.preventDefault();

        if (e.target.value === "" && e.target.classList.length < 2) {
            e.target.classList.add(`${e.target.className}--error`);
            setError((prevState) => ({ ...prevState, empty: true }));
        } else {
            e.target.className = `${e.target.classList[0]}`;
            setError((prevState) => ({ ...prevState, empty: false }));
        }

        if (key === "contact_email") {
            if (!isValidEmail(e.target.value) && e.target.classList.length < 2) {
                console.error("Invalid email address");
                console.log(e.target.className);
                console.log(e.target.classList);
                e.target.classList.add(`${e.target.className}--error`);
                setError((prevState) => ({ ...prevState, emailInvalid: true }));
            } else {
                console.log("Valid email");
                e.target.className = `${e.target.classList[0]}`;
                setError((prevState) => ({ ...prevState, emailInvalid: false }));
            }
        }


        if (key === "contact_phone") {
            if (!isValidPhoneNumber(e.target.value) && e.target.classList.length < 2) {
                console.error("Invalid phone number");
                e.target.classList.add(`${e.target.className}--error`);
                setError((prevState) => ({ ...prevState, phoneInvalid: true }));
            } else {
                console.log("Valid phone");
                e.target.className = `${e.target.classList[0]}`;
                setError((prevState) => ({ ...prevState, phoneInvalid: false }));
            }
        }

        setWareHouseDetails({
            ...wareHouseDetails,
            [key]: e.target.value
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phoneRegex = /^(?:(?:\+|00)\d{1,3})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{4}$/;
        return phoneRegex.test(phone);
    }

    return (
        <div className="addWarehouseForm">

            <div className="addWarehouseForm__nav-container">
                <div className="addWarehouseForm__nav">
                    <button className="nav__back-button">
                        <img className="back-button__image" src={backArrow} onClick={() => navigate(`/`)} />
                    </button>
                    <h2 className="nav__heading">Add Warehouse</h2>
                </div>
            </div>
            <div className="addWarehouseForm__details-container">

                <div className="addWarehouseForm__warehouse-details">
                    <h3 className="warehouse-details__heading">Warehouse Details</h3>

                    <div className="warehouse-details__warehouse-name">
                        <label className="warehouse-name__label">Warehouse Name</label>
                        <input className="warehouse-name__input"
                            type="text"
                            placeholder="Warehouse Name"
                            onChange={(e) => handleChange(e, "warehouse_name")}
                            required></input>
                    </div>

                    <div className="warehouse-details__street-address">
                        <label className="street-address__label">Street Address</label>
                        <input className="street-address__input"
                            type="text"
                            placeholder="Street Address"
                            onChange={(e) => handleChange(e, "address")}></input>
                    </div>

                    <div className="warehouse-details__city">
                        <label className="city__label">City</label>
                        <input className="city__input"
                            type="text"
                            placeholder="City"
                            onChange={(e) => handleChange(e, "city")}></input>
                    </div>

                    <div className="warehouse-details__country">
                        <label className="country__label">Country</label>
                        <input className="country__input"
                            type="text"
                            placeholder="Country"
                            onChange={(e) => handleChange(e, "country")}></input>
                    </div>
                </div>

                <div className="addWarehouseForm__contact-details">
                    <h3 className="contact-details__heading">Contact Details</h3>

                    <div className="contact-details__contact-name">
                        <label className="contact-name__label">Contact Name</label>
                        <input className="contact-name__input"
                            type="text"
                            placeholder="Contact Name"
                            onChange={(e) => handleChange(e, "contact_name")}></input>
                    </div>

                    <div className="contact-details__position">
                        <label className="position__label">Position</label>
                        <input className="position__input"
                            type="text"
                            placeholder="Position"
                            onChange={(e) => handleChange(e, "contact_position")}></input>
                    </div>

                    <div className="contact-details__phone-number">
                        <label className="phone-number__label">Phone Number</label>
                        <input className="phone-number__input"
                            type="tel"
                            placeholder="Phone Number"
                            onChange={(e) => handleChange(e, "contact_phone")}></input>
                    </div>

                    <div className="contact-details__email">
                        <label className="email__label">Email</label>
                        <input className="email__input"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => handleChange(e, "contact_email")}></input>
                    </div>
                </div>
            </div>

            <div className="addWarehouseForm__form-buttons">
                <button className="form-buttons__cancel-button" onClick={() => handleClick("cancel")}>Cancel</button>
                <button className="form-buttons__save-button" onClick={() => handleClick("save")}>+ Add Warehouse</button>
            </div>
        </div>
    );
}