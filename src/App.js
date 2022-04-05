import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
  }

componentDidMount() {
  firebase
   .firestore()
   .collection('products')      
   .get()
   .then( (snapshot) => {
     console.log(snapshot);
    //  snapshot.docs.map((doc) => {
    //    console.log(doc.data());
    //  });
     const products = snapshot.docs.map((doc) => {
       const data = doc.data();
       data['id'] = doc.id;
       return data;
     });

     this.setState({
       products: products,
       loading: false
     })
   });
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
    return 0;
  });

  return cartValue;
}

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getProductCount()} />
        {loading && <h1>Loading Products....</h1>}
        <Cart 
          products={products}
          onIncreaseQuantity={this.handlingIncreaseQuantity}
          onDecreaseQuantity={this.handlingDecreaseQuantity} 
          onDeleteProduct={this.handlingDeleteProduct}
        />

        <div style={{padding:10,fontSize: 20}}>TOTAL: {this.getCartValue()}</div>
      </div>
    );
  }
}

export default App;
