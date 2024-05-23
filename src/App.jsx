import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryList from "./components/DeleteInventoryModal/DeleteInventoryModal";

import InventoryPage from "./pages/InventoryPage/InventoryPage";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventories" element={<InventoryList/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
