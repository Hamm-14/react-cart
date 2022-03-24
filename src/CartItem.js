import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: '10,000',
            qty: 2,
            title: 'Phone',
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log(this.state);
    }

    render(){
        const {price, qty, title, img} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: 'grey'}}>{price}</div>
                    <div style={{color: 'grey'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt='decrease' 
                         className='action-icons'
                         src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                         onClick = {this.decreaseQuantity} />
                        <img alt='increase'
                         className='action-icons'
                          src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648097216~hmac=215b87d892eb8cbf28a9a0c92a6b30a5' 
                          onClick = {this.increaseQuantity}/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png' />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc' 
    }
}

export default CartItem;