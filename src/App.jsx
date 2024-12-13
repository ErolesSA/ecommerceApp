import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import ProductDetails from './components/ProductDetails.jsx'; // Componente de detalles del producto
import Home from './components/Home.jsx';  // Componente de inicio que contiene Dashboard y Categories
import Footer from './components/Footer.jsx';
Footer

function App() {
  return (
    <Router>
      <Navbar /> {/* El Navbar siempre se mostrará */}
      <Routes>
        {/* Página de inicio con Home que incluye Dashboard y Categories */}
        <Route path="/" element={<Home />} />  

        {/* Página de detalles del producto */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
