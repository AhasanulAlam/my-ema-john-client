import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;

    // taking from shop component
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="Product Image" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: ${seller}</p>
                <p>Rating: ${ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;