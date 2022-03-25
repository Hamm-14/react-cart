import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {onDecreaseQuantity, onIncreaseQuantity, onDeleteProduct, products} = props;
    return(
        <div className='cart'>
            {products.map( (product) => {
                return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={onIncreaseQuantity}
                    onDecreaseQuantity={onDecreaseQuantity} 
                    onDeleteProduct={onDeleteProduct} />
                )
            })}
        </div>
    )
}

// class Cart extends React.Component {
    

//     render(){
//         const {products} = this.state;
//         return(
//             <div className='cart'>
//                {products.map( (product) => {
//                    return (
//                        <CartItem 
//                         product={product} 
//                         key={product.id}
//                         onIncreaseQuantity={this.handlingIncreaseQuantity}
//                         onDecreaseQuantity={this.handlingDecreaseQuantity} 
//                         onDeleteProduct={this.handlingDeleteProduct} />
//                    )
//                })}
//             </div>
//         )
//     }
// }


export default Cart;