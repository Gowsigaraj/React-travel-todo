import React, { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import Item from './Item'
import Footer from './Footer'




const App = () => {
  const [products, setProduct] = useState([])
  const handleAddItems = (proItem) => {
    setProduct((products) => [...products, proItem])
  }

  const clearItems = () => {
    setProduct([])

  }
  const deleteItems = (id) => {
    setProduct((products) => products.filter((items) => {
      return items.id !== id;
    }))
  }

  const packedItem = (id, packed) => {
    console.log(packed);

    setProduct((products) => products.map((item) => {
      if (item.id === id)
        return { ...item, packed };
      return item;


    })
    );
  };


  const sort = (value) => {
    setProduct(products);
    console.log(value, products);
    if (value === "input")
      return setProduct((products) =>
        products.sort((a, b) => a.id - b.id).map((products) => products)
      );

    if (value === "description")
      return setProduct((products) =>
        products
          .sort((a, b) => {
            if (a.product < b.product) return -1;
            if (a.product > b.product) return 1;
            return 0;
          })
          .map((products) => products)
      );

    if (value === "pack")
      return setProduct((products) =>
        products.sort((a, b) => a.packed - b.packed).map((products) => products)
      );

    console.log(value, products);
  };





  return (
    <div className='App'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Item product={products} clearItems={clearItems} deleteItems={deleteItems} packedItem={packedItem} sortItems={sort} />


      <Footer props={products} />
    </div>
  )
}

export default App


