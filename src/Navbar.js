import React from 'react';

const Navbar = (props) => {
    const {count} = props;
    return(
        <div style={styles.nav}>
            <div style={styles.cartItemContainer}>
                <img style={styles.cartItem} alt='cart-icon' src='https://cdn-icons-png.flaticon.com/512/711/711897.png' />
                <span style={styles.cartCount}>{count}</span>
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
        position: 'relative',
        marginRight: 15
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