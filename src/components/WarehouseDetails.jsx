import './WarehouseDetails.scss';

export default function WarehouseDetails() {
    return(
        <div className="warehouseDetails">
            {/* might be part of navigation component instead of warehouse details component
            <div className="warehouseDetails__top-nav">
                <img className="top-nav__back-button"></img>
            </div> */}

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

            <div className="warehouseDetails__inventory">
                <div className="inventory__table-header">
                    <h3 className="table-header__col-header">INVENTORY ITEM</h3>
                    <h3 className="table-header__col-header">CATEGORY</h3>
                    <h3 className="table-header__col-header">STATUS</h3>
                    <h3 className="table-header__col-header">QUANTITY</h3>
                    <h3 className="table-header__col-header">ACTIONS</h3>
                </div>
            </div>

        </div>
    )
}