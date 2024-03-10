import { LandingPage } from "./components/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart";
import { Collections } from "./components/collections";
import { ShowCollection } from "./components/showCollection";
import { Product } from "./components/product";
import { ShowCategory } from "./components/showCategory";
import { AllProducts } from "./components/allProducts";
import Checkout from "./components/checkout";
import { FAQ } from "./components/faq";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/fairytale" element={<ShowCollection />} />
          <Route path="/collections/rosebud" element={<ShowCollection />} />
          <Route path="/collections/pastel" element={<ShowCollection />} />
          <Route path="/products/:productName" element={<Product />} />
          <Route path="/:category" element={<ShowCategory />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
