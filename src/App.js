import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [
            {
                title: 'Mobile',
                price: 10000,
                qty: 2,
                img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                id: 1
            },
            {
                title: 'Watch',
                price: 200,
                qty: 3,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 2
            },
            {
                title: 'Shoes',
                price: 1200,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id: 3
            }
        ]
    }
}

handlingIncreaseQuantity = (product) => {
    // console.log('Hey Increasing quantity of', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products: products
    });
}

handlingDecreaseQuantity = (product) => {
    // console.log('Hey decreasing quantity of', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products: products
    });
}

handlingDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    });
}

getProductCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach( (product) => {
    count += product.qty;
  });

  return count;
}

getCartValue = () => {
  const {products} = this.state;

  let cartValue = 0;

  products.map((product) => {
    cartValue = cartValue + product.qty * product.price;
  });

  return cartValue;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getProductCount()} />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handlingIncreaseQuantity}
          onDecreaseQuantity={this.handlingDecreaseQuantity} 
          onDeleteProduct={this.handlingDeleteProduct}/>

        <div style={{padding:10,fontSize: 20}}>TOTAL: {this.getCartValue()}</div>
      </div>
    );
  }
}

export default App;
