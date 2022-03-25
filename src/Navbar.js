import React from 'react';

const Navbar = (props) => {
    return(
        <div style={styles.nav}>
            <div style={styles.cartItemContainer}>
                <img style={styles.cartItem} alt='cart-icon' src='https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1648176080~hmac=49a162e71e03b69b2013da19fabcae3b' />
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}

const styles = {
    cartItem: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartItemContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        left: '60%',
        top: '-20%'
    }
}

export default Navbar