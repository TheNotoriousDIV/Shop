import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import NotFoundPage from "./pages/NotFoundPage"
import Checkout from "./pages/Checkout"
import ProductProvider from "./context/ProductContext"


function App() {
return(
  <ProductProvider>
  <Routes>
    <Route path="/" element={<Navigate to="/products" replace />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<DetailsPage />} />
    <Route path="/*" element={<NotFoundPage />} />
    <Route path="/checkout" element={<Checkout/>} />
  </Routes>
  </ProductProvider>
)
}

export default App
