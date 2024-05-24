import './WarehouseInventory.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import searchIcon from '../../assets/Icons/search-24px.svg';

function WarehouseInventory() {
    function InventoryListMobile() {
        return (
            <section className="inventory-list inventory-list--mobile">
                <article className="inventory-entry">
                    <div className="inventory-entry__row inventory-entry__row--item-status">
                        <div className="inventory-entry__col inventory-entry__col--item">
                            <p className="inventory-entry__label">
                                INVENTORY ITEM
                            </p>
                            <Link className="inventory-entry__link">
                                <p className="inventory-entry__col-data inventory-entry__col-data--item">
                                    Television
                                </p>
                            </Link>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--status">
                            <p className="inventory-entry__label">STATUS</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--status">
                                IN STOCK
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--category-qty">
                        <div className="inventory-entry__col inventory-entry__col--category">
                            <p className="inventory-entry__label">CATEGORY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--category">
                                Electronics
                            </p>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--qty">
                            <p className="inventory-entry__label">QTY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--qty">
                                500
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--spacer-warehouse">
                        <div className="inventory-entry__col inventory-entry__col--spacer"></div>
                        <div className="inventory-entry__col inventory-entry__col--warehouse">
                            <p className="inventory-entry__label">WAREHOUSE</p>
                            <p className="inventory-entry__col-data">
                                Manhattan
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--actions">
                        <img
                            src={deleteIcon}
                            alt="delete icon"
                            className="delete-button"
                        />
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
                            <p className="arrows__down">^</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">CATEGORY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">^</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">STATUS</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">^</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">QTY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">^</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">WAREHOUSE</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">^</p>
                        </div>
                    </div>
                    <div className="inventory-list__col table-header">
                        <p className="table-header__text">ACTIONS</p>
                    </div>
                </div>
                <div className="inventory-list__row inventory-list__row--table-entry">
                    <div className="inventory-list__col table-cell">
                        <Link className="table-cell__link">
                            <p className="table-cell__data table-cell__data--item">
                                Television
                            </p>
                        </Link>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--category">
                            Electronics
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--status">
                            IN STOCK
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--qty">
                            500
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--warehouse">
                            Manhattan
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <img
                            className="table-cell__data table-cell__data--delete"
                            src={deleteIcon}
                            alt="delete icon"
                        />
                        <img
                            className="table-cell__data table-cell__data--edit"
                            src={editIcon}
                            alt="edit icon"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <div className="warehouse-inventory">
                <section className="inventory-header">
                    <h1 className="inventory-header__title">Inventory</h1>
                    <div className="search">
                        <input
                            type="text"
                            name="inventory-search"
                            id="inventory-search"
                            className="search__input"
                            placeholder="Search..."
                        />
                        <img
                            src={searchIcon}
                            alt="search icon"
                            className="search__icon"
                        />
                    </div>
                    <button className="inventory-header__add-button">
                        + Add New Item
                    </button>
                </section>
                {/* only one InventoryList is displayed based on media query */}
                <InventoryListMobile />
                <InventoryListTabletDesktop />
            </div>
        </>
    );
}

export default WarehouseInventory;
