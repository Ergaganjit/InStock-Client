import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseList from "./components/DeleteWarehouseModal/DeleteWarehouseModal";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouses" element={<WarehouseList/>} />
          <Route path="/inventory/edit/:id" element={<EditInventoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
