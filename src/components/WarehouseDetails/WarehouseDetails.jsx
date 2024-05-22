/* TODO
Create the Warehouse Details component. The user should also be able to 
navigate back to the Warehouse List Page from this page. Ensure that it works 
at and between all breakpoints and is fully responsive without any elements overlapping.
*/


import './WarehouseDetails.scss';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';

export default function WarehouseDetails() {

    const id = "placeholder";

    return (
        <div className="warehouseDetails">

            <div className="warehouseDetails__nav">
                <img className="nav__back-button" />
                <h1 className="nav__warehouse">WASHINGTON</h1>
                <button className="nav__edit-button">
                    <img className="edit-button__image" src={editIcon} alt="edit icon" />
                    <label className="edit-button__label">Edit</label>
                </button>
            </div>

            <div className="warehouseDetails__info-container">
                <div className="info-container__address-container">
                    <h3 className="address-container__heading">WAREHOUSE ADDRESS</h3>
                    <p className="address-container__address"></p>
                </div>
                <div className="warehouseDetails__contact-container">
                    <div className="contact-container__contact-name-container">
                        <h3 className="contact-name-container__heading">CONTACT NAME</h3>
                        <p className="contact-name-container__contact"></p>
                    </div>
                    <div className="contact-container__contact-info-container">
                        <h3 className="contact-info-container__heading">CONTACT INFORMATION</h3>
                        <p className="contact-info-container__contact-info"></p>
                    </div>
                </div>
            </div>

            <table className="warehouseDetails__table">
                <thead className="table__header-container">
                    <tr className="header-container__row">
                        <th className="header-container__col-header-item">INVENTORY ITEM</th>
                        <th className="header-container__col-header-category">CATEGORY</th>
                        <th className="header-container__col-header-status">STATUS</th>
                        <th className="header-container__col-header-quantity">QUANTITY</th>
                        <th className="header-container__col-header-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="table__body-container">
                    <tr className="body-container__row">
                        {/* <Link key={id} to={`/item-details/${id}`}> */}
                            <td className="body-container__data-item">
                                <button className="data__button">
                                    <p className="data__label">Television</p>
                                    <img className="data__image" src={chevronIcon} alt="chevron icon" />
                                </button>
                            </td>
                        {/* </Link> */}
                        <td className="body-container__data-category">Electronics</td>
                        <td className="body-container__data-status">IN STOCK</td>
                        <td className="body-container__data-quantity">500</td>
                        <td className="body-container__data-actions">
                            <button className="data__delete-button">
                                <img className="delete-button__image" src={deleteIcon} alt="delete button" />
                            </button>
                            <button className="data__edit-button">
                                <img className="edit-button__image" src={editIcon} alt="edit button" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}