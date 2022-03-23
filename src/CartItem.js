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
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1648046323~hmac=ba7b53f5778e6790660bbca6cf3d764b' />
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