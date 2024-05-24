import './WarehouseDetails.scss';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import InventoryList from '../InventoryList/InventoryList';


export default function WarehouseDetails() {

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
    }, [])


    return (
        <>
            <div className="warehouseDetails">

                <div className="warehouseDetails__nav">
                    <button className="nav__back-button">
                        <img className="back-button__image" src={backArrow} onClick={() => navigate(`/`)} />
                    </button>
                    <h1 className="nav__warehouse-heading">{wareHouseDetails?.warehouse_name}</h1>
                    <Link className="nav__edit-link" to={`/${wareHouseDetails?.id}/edit`}>
                        <button className="edit-link__edit-button">
                            <img className="edit-button__image" src={editIcon} alt="edit icon" />
                            <label className="edit-button__label">Edit</label>
                        </button>
                    </Link>
                </div>

                <div className="warehouseDetails__info-container">
                    <div className="info-container__address-container">
                        <h3 className="address-container__heading">WAREHOUSE ADDRESS:</h3>
                        <div className="address-container__inner-container">
                            <p className="address-container__address">{wareHouseDetails?.address},&nbsp;</p>
                            <p className="address-container__city-country">{wareHouseDetails?.city}, {wareHouseDetails?.country}</p>

                        </div>
                    </div>
                    <div className="info-container__contact-container">
                        <div className="contact-container__contact-name-container">
                            <h3 className="contact-name-container__heading">CONTACT NAME:</h3>
                            <p className="contact-name-container__contact">{wareHouseDetails?.contact_name}<br />{wareHouseDetails?.contact_position}</p>

                        </div>
                        <div className="contact-container__contact-info-container">
                            <h3 className="contact-info-container__heading">CONTACT INFORMATION:</h3>
                            <p className="contact-info-container__contact-info">{wareHouseDetails?.contact_phone}<br />{wareHouseDetails?.contact_email}</p>
                        </div>
                    </div>
                </div>

            </div>

        {/* <InventoryList /> */}
        </>
    );
}