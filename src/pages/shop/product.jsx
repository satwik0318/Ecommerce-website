import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  
  // Extract `addToCart` from the ShopContext
  const { addToCart ,cartItems} = useContext(ShopContext);
 const cartItemsAmount=cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add to Cart{ cartItemsAmount>0 && <> ({cartItemsAmount})</>}
        </button>
    </div>
  );
};
