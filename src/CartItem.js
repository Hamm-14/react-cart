import React from 'react';

class CartItem extends React.Component {

    increaseQuantity = () => {
        //setState form 1 -> use this when prevstate not required
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2 -> use this when previous state is required
        this.setState((prevstate) => {
            return{
                qty: prevstate.qty + 1
            }
        }, () => {
            console.log('inside callback', this.state);
        });
    }

    // testing(){
    //     var promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //             console.log('from setTimeout',this.state);
    //         },5000);
    //     });

    //     promise.then( () => {

    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
            
    //         console.log('inside promise',this.state);
    //     });
    // }

    decreaseQuantity = () => {
        const {qty} = this.state;  //destructuring state
        if(qty === 0){
            return;
        }
        this.setState((prevstate) => {
            return{
                qty: prevstate.qty - 1
            }
        })
    }

    render(){
        const {price, qty, title, img} = this.props.product;
        console.log('render');
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