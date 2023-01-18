import { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem'
import {CartContext} from './CartContext';
import productData from './ProductData'

function Cart() {
    let { cart, clearCart } = useContext(CartContext)
    console.log(cart)

    return (
        <div className="p-15">
            <div className="products-header">
                <h1 style={{ marginBottom: 4 + "px" }}>Koszyk</h1>
                <span className="text-secondary">Ilosc produktow: {cart.length}</span>
            </div>

            <div className="cart-product-list">
                {
                    cart.map((item, i) => {
                        return (
                            <CartItem product={item} key={i} index={i} />
                        )
                    })
                }
            </div>
            
            <div className="right-align">
                
            </div>

            <div className="right-align">
                <a href="#" onClick={clearCart} className="btn btn-red">Wyczysc koszyk</a>
                <a href="#" className="btn btn-green">Finalizacja zamowienia</a>
            </div>
        </div>
    )
}

export default Cart