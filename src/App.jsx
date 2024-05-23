import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header.jsx";
import Footer from "../src/components/footer/footer.jsx";

import WarehousePage from "./pages/WarehousePage/WarehousePage.jsx";
// import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
// import EditWarehousePage from './pages/EditWarehousePage/EditWarehousePage.jsx';
// import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage.jsx';
import InventoryPage from './pages/InventoryPage/InventoryPage.jsx';
// import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage.jsx';
// import EditInventoryPage from './pages/EditInventoryPage/EditInventoryPage.jsx';
// import AddInventoryPage from './pages/AddInventoryPage/AddInventoryPage.jsx';

import WarehouseList from "./components/DeleteWarehouseModal/DeleteWarehouseModal";
import InventoryList from "./components/DeleteInventoryModal/DeleteInventoryModal";

function App() {
  return (
    <BrowserRouter>
      <section className="browser-container">
        <Header />
        <div className="routes-container">
          <Routes>
            <Route path='/' element={<WarehousePage/>} />
            {/* <Route path='/warehouse/:id' element={<WarehouseDetailsPage />} />
            <Route path='/warehouse/edit/:id' element={<EditWarehousePage/>} />
            <Route path='/warehouse/add' element={<AddWarehousePage />} /> */}
            <Route path='/inventory' element={<InventoryPage />} />
            {/* <Route path='/inventory/:id' element={<InventoryDetailsPage />} />
            <Route path='/inventory/edit/:id' element={<EditInventoryPage />} />
            <Route path='/inventory/add' element={<AddInventoryPage/>} /> */}
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
