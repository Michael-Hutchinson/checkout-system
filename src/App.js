import React from 'react';

//includes
import './assets/css/default.min.css';
import productData from './assets/data/products';

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Products from './components/main/products'
import Basket from './components/main/basket'
import { CartProvider } from './components/main/basketContext';

function App() {
  const prods = productData.map(item => <Products name={item.name} price={item.price} key={item.id} item={item} />)
  return (
    <CartProvider>
    <div>
      <Header />
      <Basket />
      <div className="container">
        <div className="row">
          {prods}
        </div>
      </div>
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;