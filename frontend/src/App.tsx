import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Products from './pages/Products'
import Kitchen from './pages/Kitchen'
import Orders from './pages/Orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
