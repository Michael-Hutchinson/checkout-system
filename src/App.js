import React from 'react';

//includes
import './assets/css/default.min.css';
import productData from './assets/data/products';

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Products from './components/main/products'

function App() {
  const prods = productData.map(item => <Products key={item.name} item={item} />)
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {prods}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;