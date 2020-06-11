import React from 'react';

function Products(props) {
  return (
    <section>
        <h2>{props.item.name}</h2>
        <br />
        <p>{props.item.price}</p>
        <br />
        <button>Add to basket</button>
        <hr />
    </section>
  );
}

export default Products;