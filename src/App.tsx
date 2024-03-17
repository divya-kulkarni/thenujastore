import { LandingPage } from "./pages/landingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart/cart";
import { Collections } from "./components/collections";
import { ShowCollection } from "./pages/showCollection";
import { Product } from "./pages/product";
import { ShowCategory } from "./pages/showCategory";
import { AllProducts } from "./pages/allProducts";
import Checkout from "./pages/Checkout/checkout";
import { FAQ } from "./pages/faq";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { InvalidProduct } from "./components/invalidProduct";

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
          <Route path="/products/*" element={<InvalidProduct />} />
          <Route path="/:category" element={<ShowCategory />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
