import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Warehouses</h1>
        {/* <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
