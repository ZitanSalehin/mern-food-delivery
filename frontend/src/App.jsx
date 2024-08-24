import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
