import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={`${menu === 'home' ? 'active' : ''}`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu('menu')}
          className={`${menu === 'menu' ? 'active' : ''}`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu('mob-app')}
          className={`${menu === 'mob-app' ? 'active' : ''}`}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu('contact')}
          className={`${menu === 'contact' ? 'active' : ''}`}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
