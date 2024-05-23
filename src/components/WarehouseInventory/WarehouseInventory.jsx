import './WarehouseInventory.scss';

function WarehouseInventory() {
    function InventoryListMobile() {
        return (
            <section className="inventory-list inventory-list--mobile">
                <article className="inventory-entry">
                    <div className="inventory-entry__item-status">
                        <div className="inventory-item"></div>
                        <div className="status"></div>
                    </div>
                    <div className="inventory-entry__category-qty">
                        <div className="category"></div>
                        <div className="qty"></div>
                    </div>
                    <div className="inventory-entry__spacer-warehouse">
                        <div className="spacer"></div>
                        <div className="warehouse"></div>
                    </div>
                    <div className="inventory-entry__actions">
                        {/* action buttons are img or button with img? */}
                        <img src="" alt="" className="delete-button" />
                        <img src="" alt="" className="edit-button" />
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
