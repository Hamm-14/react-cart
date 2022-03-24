import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
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
    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
               {products.map( (product) => {
                   return (
                       <CartItem product={product} key={product.id} />
                   )
               })}
            </div>
        )
    }
}


export default Cart;