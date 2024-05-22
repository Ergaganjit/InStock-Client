import './WarehouseInventory.scss'; 

function WarehouseInventory() {
    return (
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
            <section className="warehouse-list">
                <div className="warehouse-list__row warehouse-list__row--table-header-row">
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">INVENTORY ITEM</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">CATEGORY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">STATUS</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">QTY</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">WAREHOUSE</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                    <div className="warehouse-list__col table-header">
                        <p className="table-header__text">ACTIONS</p>
                        <div className="arrows">
                            <p className="arrows__up">^</p>
                            <p className="arrows__down">v</p>
                        </div>
                    </div>
                </div>
                <div className="warehouse-list__row warehouse-list__row--table-entry"></div>
            </section>
        </div>
    );
}

export default WarehouseInventory;