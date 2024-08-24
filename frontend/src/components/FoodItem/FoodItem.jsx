// import { useContext } from 'react';
import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
import './FoodItem.css';

const FoodItem = ({ image, name, price, desc, id }) => {
  // const { cartItems, addToCart, removeFromCart, url } =
  //   useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
