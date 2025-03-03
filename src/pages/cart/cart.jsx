import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-Item';  // Fixed import

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};
