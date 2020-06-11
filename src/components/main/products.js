import React from 'react';

function Products(props) {
  const addToBasket = () => {
    console.log('click worked');
  }
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Name: {props.item.name}</h2>
          <p className="card-text">Price: £{props.item.price}</p>
          <button onClick={addToBasket} className="btn btn-primary">Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default Products;