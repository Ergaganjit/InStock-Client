import './EditWarehouseForm.scss';

import backArrow from '../../assets/Icons/arrow_back-24px.svg';

export default function EditWarehouseForm() {
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

            <div className="editWarehouseForm__warehouse-details">
                <h3 className="warehouse-details__heading">Warehouse Details</h3>

                <div className="warehouse-details__warehouse-name">
                    <label className="warehouse-name__name">Warehouse Name</label>
                    <input className="warehouse-name__input" placeholder="name"></input>
                </div>

                <div className="warehouse-details__street-address">
                    <label className="street-address__name">Street Address</label>
                    <input className="street-address__input" placeholder="address"></input>
                </div>

                <div className="warehouse-details__city">
                    <label className="city__name">City</label>
                    <input className="city__input" placeholder="city"></input>
                </div>

                <div className="warehouse-details__country">
                    <label className="country__name">Country</label>
                    <input className="country__input" placeholder="country"></input>
                </div>
            </div>

            <div className="editWarehouseForm__contact-details">
                <h3 className="contact-details__heading">Contact Details</h3>

                <div className="contact-details__contact-name">
                    <label className="contact-name__name">Warehouse Name</label>
                    <input className="contact-name__input" placeholder="name"></input>
                </div>

                <div className="contact-details__position">
                    <label className="position__name">Street Address</label>
                    <input className="position__input" placeholder="address"></input>
                </div>

                <div className="contact-details__phone-number">
                    <label className="phone-number__name">City</label>
                    <input className="phone-number__input" placeholder="city"></input>
                </div>

                <div className="contact-details__email">
                    <label className="email__name">Country</label>
                    <input className="email__input" placeholder="country"></input>
                </div>
            </div>


        </div>
    );
}