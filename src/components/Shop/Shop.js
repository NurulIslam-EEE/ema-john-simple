import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the ui
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        console.log('api called');
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log('product received');
            })

    }, []);


    const handleAddToCart = product => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        console.log('newCart', newCart);
        setCart(newCart);
        //save to local storage
        addToDb(product.key)
    }

    // find searching products
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProducts.length)
        setDisplayProducts(matchedProducts);
    }

    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="search Products" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)

                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>

                        <Link to="/review"> <button className="btn-regular">Review Your Order</button> </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;