import React, { useContext, useState} from 'react';
import { CartContext } from './basketContext';

function Products(props) {
  const [cart, setCart] = useContext(CartContext);
  const [basketQuanity, setBasketQuantity] = useState(0);	

  const addToCart = () => {
    const productData = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, productData]);
    setBasketQuantity(basketQuanity + 1);
  }
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Name: {props.item.name}</h2>
          <p className="card-text">Price: £{props.item.price}</p>
          <button onClick={addToCart} className="btn btn-primary">Add to basket</button>
        </div>
      </div>
      <p className={`${props.item.id} hidden`}>{basketQuanity}</p>
    </div>
  );
}

export default Products;