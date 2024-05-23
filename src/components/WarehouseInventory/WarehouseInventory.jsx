import './WarehouseInventory.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

function WarehouseInventory() {
    function InventoryListMobile() {
        return (
            <section className="inventory-list inventory-list--mobile">
                <article className="inventory-entry">
                    <div className="inventory-entry__item-status">
                        <div className="item">
                            <p className="inventory-entry__label">
                                INVENTORY ITEM
                            </p>
                            <Link>
                                <p className="item__link">
                                    Television
                                </p>
                            </Link>
                        </div>
                        <div className="status">
                            <p className="inventory-entry__label">STATUS</p>
                            <p className="status__text">IN STOCK</p>
                        </div>
                    </div>
                    <div className="inventory-entry__category-qty">
                        <div className="category">
                            <p className="inventory-entry__label">CATEGORY</p>
                            <p className="category__text">Electronics</p>
                        </div>
                        <div className="qty">
                            <p className="inventory-entry__label">QTY</p>
                            <p className="qty__text">500</p>
                        </div>
                    </div>
                    <div className="inventory-entry__spacer-warehouse">
                        <div className="spacer"></div>
                        <div className="warehouse">
                            <p className="inventory-entry__label">WAREHOUSE</p>
                            <p className="warehouse__name">Manhattan</p>
                        </div>
                    </div>
                    <div className="inventory-entry__actions">
                        {/* action buttons are img or button with img? */}
                        <img src={deleteIcon} alt="" className="delete-button" />
                        <img src={editIcon} alt="" className="edit-button" />
                    </div>
                </article>
            </section>
        );
    }

    function InventoryListTabletDesktop() {
        return (
            <section className="inventory-list inventory-list--tablet-desktop">
                <div className="inventory-list__row inventory-list__row--table-headers">
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">INVENTORY ITEM</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">CATEGORY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">STATUS</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">QTY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">WAREHOUSE</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">ACTIONS</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                </div>
                <div className="inventory-list__row inventory-list__row--table-entry"></div>
            </section>
        );
    }

    return (
        <>
            <div className="warehouse-inventory">
                <section className="inventory-header">
                    <h1 className="inventory-header__title">Inventory</h1>
                    <input
                        type="text"
                        name="inventory-search"
                        class="inventory-search"
                        className="inventory-header__search-input"
                    />
                    <button className="inventory-header__add-button">
                        + Add New Item
                    </button>
                </section>
                <InventoryListMobile />
                <InventoryListTabletDesktop />
            </div>
        </>
    );
}

export default WarehouseInventory;
