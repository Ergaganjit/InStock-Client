import './WarehouseInventory.scss';
import searchIcon from '../../assets/Icons/search-24px.svg';
import InventoryList from '../InventoryList/InventoryList';

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
            <InventoryList inventory={testInventory} />
        </div>
    );
}

export default WarehouseInventory;
