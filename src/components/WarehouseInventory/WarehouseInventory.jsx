import './WarehouseInventory.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import searchIcon from '../../assets/Icons/search-24px.svg';

function WarehouseInventory({ inventory }) {
    const testInventory = [
        {
            id: 1,
            itemName: 'Television',
            category: 'Electronics',
            status: 'IN STOCK',
            quantity: '500',
            warehouse: 'Manhattan',
        },
    ];

    function InventoryListMobile({ inventory }) {
        function InventoryListEntry({
            itemName,
            status,
            category,
            quantity,
            warehouse,
        }) {
            return (
                <article className="inventory-entry">
                    <div className="inventory-entry__row inventory-entry__row--item-status">
                        <div className="inventory-entry__col inventory-entry__col--item">
                            <p className="inventory-entry__label">
                                INVENTORY ITEM
                            </p>
                            <Link className="inventory-entry__link">
                                <p className="inventory-entry__col-data inventory-entry__col-data--item">
                                    {itemName}
                                </p>
                            </Link>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--status">
                            <p className="inventory-entry__label">STATUS</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--status">
                                {status}
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--category-qty">
                        <div className="inventory-entry__col inventory-entry__col--category">
                            <p className="inventory-entry__label">CATEGORY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--category">
                                {category}
                            </p>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--qty">
                            <p className="inventory-entry__label">QTY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--qty">
                                {quantity}
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--spacer-warehouse">
                        <div className="inventory-entry__col inventory-entry__col--spacer"></div>
                        <div className="inventory-entry__col inventory-entry__col--warehouse">
                            <p className="inventory-entry__label">WAREHOUSE</p>
                            <p className="inventory-entry__col-data">
                                {warehouse}
                            </p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--actions">
                        <img
                            src={deleteIcon}
                            alt="delete icon"
                            className="delete-button"
                        />
                        <img
                            src={editIcon}
                            alt="edit icon"
                            className="edit-button"
                        />
                    </div>
                </article>
            );
        }

        return (
            <section className="inventory-list inventory-list--mobile">
                {inventory.map((item) => (
                    <InventoryListEntry
                        key={item.id}
                        itemName={item.itemName}
                        status={item.status}
                        category={item.category}
                        quantity={item.quantity}
                        warehouse={item.warehouse}
                    />
                ))}
            </section>
        );
    }

    function InventoryListTabletDesktop({ inventory }) {
        function InventoryListTableEntry({
            itemName,
            status,
            category,
            quantity,
            warehouse
        }) {
            return (
                <div className="inventory-list__row inventory-list__row--table-entry">
                    <div className="inventory-list__col table-cell">
                        <Link className="table-cell__link">
                            <p className="table-cell__data table-cell__data--item">
                                {itemName}
                            </p>
                        </Link>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--category">
                            {category}
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--status">
                            {status}
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--qty">
                            {quantity}
                        </p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--warehouse">
                            {warehouse}
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
            );
        }

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
                {inventory.map((item) => (
                    <InventoryListTableEntry
                        key={item.id}
                        itemName={item.itemName}
                        status={item.status}
                        category={item.category}
                        quantity={item.quantity}
                        warehouse={item.warehouse}
                    />
                ))}
            </section>
        );
    }

    return (
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
            {/* only one type InventoryList is displayed based on media query */}
            <InventoryListMobile inventory={testInventory} />
            <InventoryListTabletDesktop inventory={testInventory} />
        </div>
    );
}

export default WarehouseInventory;
