import { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem'
import { CartContext } from './CartContext';
import { AccountContext } from './AccountContext'
import productData from './ProductData'
import { useNavigate } from 'react-router-dom';

function Cart() {
    let { cart, clearCart } = useContext(CartContext)
    let { account } = useContext(AccountContext)

    const navigate = useNavigate()

    const finalize = () => {
        if (account === null) {
            alert("Proszę się najpierw zalogować.");
            return;
        }

        navigate("/cart/checkout")
    }

    if (cart.length === 0) {
        return (
            <div className="p-15">
                <div className="products-header">
                    <h1 style={{ marginBottom: 4 + "px" }}>Koszyk</h1>
                    <span className="text-secondary">Koszyk jest pusty. <br />Aby dodać produkty należy przejść do zakładki Produkty.</span>
                </div>
            </div>
        )
    }

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
                <button onClick={clearCart} className="btn btn-red">Wyczysc koszyk</button>
                <button onClick={finalize} className="btn btn-green">Finalizacja zamowienia</button>
            </div>
        </div>
    )
}

export default Cart