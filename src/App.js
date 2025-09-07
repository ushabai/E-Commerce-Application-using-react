import './App.css';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogAuth from './LogAuth/LogAuth';
import { Shop } from './Home/Shop';
import { ForgotPassword } from './ForgotPassword';
import { About } from './About';
import ProductDetail from './Home/ProductDetail';
import ProductList from './ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LogAuth />} />
        <Route path="/shop" element={<Shop pageSize={6} />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
