import React from 'react';
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';
import './InventoryPage.scss';

function InventoryPage() {
  return (
    <section className="inventory-page">
        <div className="inventory-page__content">
            <WarehouseInventory />
        </div>
    </section>
  );
}

export default InventoryPage;