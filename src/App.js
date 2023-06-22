import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Manager from "./pages/Manager/Manager";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import EditManager from "./pages/Manager/EditManager";
import CreateNew from "./pages/Manager/CreateNew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/manager" element={<Manager />} />
        <Route path="/shop/products" element={<Products />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/edit/:id" element={<EditManager />} />
        <Route path="/shop/create" element={<CreateNew />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
