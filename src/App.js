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

    this.db = firebase.firestore();
  }

componentDidMount() {
  // this.db
  //  .collection('products')      
  //  .get()
  //  .then( (snapshot) => {
  //    console.log(snapshot);
  //   //  snapshot.docs.map((doc) => {
  //   //    console.log(doc.data());
  //   //  });
  //    const products = snapshot.docs.map((doc) => {
  //      const data = doc.data();
  //      data['id'] = doc.id;
  //      return data;
  //    });

  //    this.setState({
  //      products: products,
  //      loading: false
  //    })
  //  });

  this.db
      .collection('products')
      .onSnapshot((snapshot) => {          //Attach a listener to query snapshot, will be called whenever something changes in our db
           console.log(snapshot);
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
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({qty: products[index].qty + 1})
          .then( () => {
            console.log('Updated Successfully');
          })
          .catch((err) => {
            console.log('Error in increasing qty',err);
          });
}

handlingDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }

    // products[index].qty -= 1;
    // this.setState({
    //     products: products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({qty: products[index].qty - 1})
          .then( () => {
            console.log('Updated Successfully');
          })
          .catch((err) => {
            console.log('Error in decreasing qty',err);
          });
}

handlingDeleteProduct = (id) => {
    const {products} = this.state;

    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products: items
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef.delete()
          .then( () => { 
            console.log('Deleted Successfully');
          })
          .catch((err) => {
            console.log('Error in deleting cart item',err);
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
