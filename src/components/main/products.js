import React, { useContext, useState} from 'react';
import { CartContext } from './basketContext';

function Products(props) {
  const [cart, setCart] = useContext(CartContext);
  const [basketQuanity, setBasketQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const newPrice = productPrice-props.item.specialPrice;

  const addToCart = () => {
    const productData = { price: props.price };
    setCart(currentState => [...currentState, productData]);
    setBasketQuantity(basketQuanity + 1);
    setProductPrice(productPrice + props.item.price, 0);
  }
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Name: {props.item.name}</h2>
          <p className="card-text">Price: £{props.item.price}</p>
          <button onClick={addToCart} className="btn btn-primary">Add to basket</button>
          <p className={`${props.item.id}`}>Quantity Added: {basketQuanity}</p>
          {(basketQuanity === 3 && props.item.id === 1) || (basketQuanity === 2 && props.item.id === 2)  ? (
            <p>£{newPrice}</p>
          ) : (
            <p>£{productPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;