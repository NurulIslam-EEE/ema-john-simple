import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);

    }
    const handleProceedToShipping = () => {
        history.push('/placeorder');
        // setCart([]);
        // clearTheDb();
    }
    return (
        <div className="shop-container" >
            < div className="product-container" >
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></ReviewItem>)
                }
            </div >

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Proceed to shipping</button>
                </Cart>
            </div>

        </div >
    );
};

export default OrderReview;