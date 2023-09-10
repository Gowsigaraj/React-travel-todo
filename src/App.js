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

  const packedItem = (id, checked) => {
    console.log(checked);

    setProduct((products) => products.map((item) => {
      if (item.id === id)
        return { ...item, checked };
      return item



    })
    );
  };


  const sortItems = (value) => {
    setProduct(products);
    console.log(value, products);

    if (value === "order")
      return setProduct((products) =>
        products.sort((a, b) => b.id - a.id).map((products) => products)
      );

    if (value === "descripition")
      return setProduct((products) =>
        products
          .sort((a, b) => {
            if (a.descripition < b.descripition) return -1;
            if (a.descripition > b.descripition) return 1;
            return 0;
          })
          .map((products) => products)
      );

    if (value === "pack")
      return setProduct((products) =>
        products.sort((a, b) => a.checked - b.checked).map((products) => products)
      );

    console.log(value, products);
  };





  return (
    <div className='App'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Item product={products} clearItems={clearItems} deleteItems={deleteItems} packedItem={packedItem} sortItems={sortItems} />


      <Footer props={products} />
    </div>
  )
}

export default App


