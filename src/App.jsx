import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import NotFoundPage from "./pages/NotFoundPage"
import Checkout from "./pages/Checkout"
import ProductProvider from "./context/ProductContext"
import CartProvider from "./context/CartContext"


function App() {
return(
  <CartProvider>
  <ProductProvider>
  <Routes>
    <Route path="/" element={<Navigate to="/products" replace />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<DetailsPage />} />
    <Route path="/*" element={<NotFoundPage />} />
    <Route path="/checkout" element={<Checkout/>} />
  </Routes>
  </ProductProvider>
  </CartProvider>
)
}

export default App
