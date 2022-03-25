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
                img: '',
                id: 1
            },
            {
                title: 'Watch',
                price: 200,
                qty: 3,
                img: '',
                id: 2
            },
            {
                title: 'Shoes',
                price: 1200,
                qty: 1,
                img: '',
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
      </div>
    );
  }
}

export default App;
