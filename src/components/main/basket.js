import React, {useContext} from 'react';
import {CartContext} from './basketContext';

function Basket() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
        <p>Number of items: {cart.length}</p>
        <p>Total: {totalPrice}</p>
    </div>
  );
}

export default Basket;