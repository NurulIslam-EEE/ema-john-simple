import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    // const totalReducer = (previous, current) => previous + current.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        // console.log(product)
        // product.quantity=!product.quantity?1:
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + tax + shipping;
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Item Ordered: {totalQuantity}</h4>
            <br />
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>{grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;