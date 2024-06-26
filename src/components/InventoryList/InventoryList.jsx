import './InventoryList.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteInventoryModal from '../DeleteInventoryModal/DeleteInventoryModal';

const InventoryList = ({ inventory }) => {
    const [inventories, setInventories] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inventoryToDelete, setInventoryToDelete] = useState(null);

    useEffect(() => {
        setInventories(inventory);
    }, [inventory]); // items will not load unless inventory is a dependency, for some reason...

    const openModal = (inventory) => {
        setInventoryToDelete(inventory);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setInventoryToDelete(null);
    };

    const deleteInventory = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/inventories/${inventoryToDelete.id}`);
            setInventories(inventories.filter(inv => inv.id !== inventoryToDelete.id));
            closeModal();
        } catch (error) {
            console.error('Error deleting inventory', error);
        }
    };

    const InventoryListMobile = ({ inventoryMobile }) => {
        const InventoryListEntry = ({ item }) => {
            const { id, item_name, status, category, quantity, warehouse_name } = item;
            const outOfStockClass = (status === "In Stock" ? "" : "out-of-stock");

            return (
                <article className="inventory-entry">
                    <div className="inventory-entry__row inventory-entry__row--item-status">
                        <div className="inventory-entry__col inventory-entry__col--item">
                            <p className="inventory-entry__label">INVENTORY ITEM</p>
                            <Link className="inventory-entry__link" to={`/inventory/${id}`}>
                                <p className="inventory-entry__col-data inventory-entry__col-data--item">{item_name}</p>
                            </Link>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--status">
                            <p className="inventory-entry__label">STATUS</p>
                            <p className={`inventory-entry__col-data inventory-entry__col-data--status ${outOfStockClass}`}>{status}</p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--category-qty">
                        <div className="inventory-entry__col inventory-entry__col--category">
                            <p className="inventory-entry__label">CATEGORY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--category">{category}</p>
                        </div>
                        <div className="inventory-entry__col inventory-entry__col--qty">
                            <p className="inventory-entry__label">QTY</p>
                            <p className="inventory-entry__col-data inventory-entry__col-data--qty">{quantity}</p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--spacer-warehouse">
                        <div className="inventory-entry__col inventory-entry__col--spacer"></div>
                        <div className="inventory-entry__col inventory-entry__col--warehouse">
                            <p className="inventory-entry__label">WAREHOUSE</p>
                            <p className="inventory-entry__col-data">{warehouse_name}</p>
                        </div>
                    </div>
                    <div className="inventory-entry__row inventory-entry__row--actions">
                        <img
                            src={deleteIcon}
                            alt="delete icon"
                            className="delete-button"
                            onClick={() => openModal(item)}
                        />
                        <Link to={`/inventory/edit/${id}`}>
                            <img
                                src={editIcon}
                                alt="edit icon"
                                className="edit-button"
                            />
                        </Link>
                    </div>
                </article>
            );
        };
        
        return (
            <section className="inventory-list inventory-list--mobile">
                {inventoryMobile.map(item => (
                    <InventoryListEntry key={item.id} item={item} />
                ))}
            </section>
        );
    };

    const InventoryListTabletDesktop = ({ inventoryTabletDesktop }) => {        
        const InventoryListTableEntry = ({ item }) => {
            const { id, item_name, status, category, quantity, warehouse_name } = item;
            const outOfStockClass = (status === "In Stock" ? "" : "out-of-stock");

            return (
                <div className="inventory-list__row inventory-list__row--table-entry">
                    <div className="inventory-list__col table-cell">
                        <Link className="table-cell__link" to={`/inventory/${id}`}>
                            <p className="table-cell__data table-cell__data--item">{item_name}</p>
                        </Link>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--category">{category}</p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className={`table-cell__data table-cell__data--status ${outOfStockClass}`}>{status}</p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--qty">{quantity}</p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <p className="table-cell__data table-cell__data--warehouse">{warehouse_name}</p>
                    </div>
                    <div className="inventory-list__col table-cell">
                        <img
                            className="table-cell__data table-cell__data--delete"
                            src={deleteIcon}
                            alt="delete icon"
                            onClick={() => openModal(item)}
                        />
                        <Link to={`/inventory/edit/${id}`}>
                            <img
                                className="table-cell__data table-cell__data--edit"
                                src={editIcon}
                                alt="edit icon"
                            />
                        </Link>
                    </div>
                </div>
            );
        };

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
                {inventoryTabletDesktop.map(item => (
                    <InventoryListTableEntry key={item.id} item={item} />
                ))}
            </section>
        );
    };

    return (
        <>
            <InventoryListMobile inventoryMobile={inventories} />
            <InventoryListTabletDesktop inventoryTabletDesktop={inventories} />
            <DeleteInventoryModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                onDelete={deleteInventory}
                inventoryToDelete={inventoryToDelete}
            />
        </>
    );
};

export default InventoryList;













