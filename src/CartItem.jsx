import { useContext } from 'react'
import {CartContext} from './CartContext';

function CartItem(props) {
    let {removeFromCart, changeCartItemQuantity} = useContext(CartContext)

    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    })

    let price = formatter.format(props.product.price)
    let priceTotal = formatter.format(props.product.price * props.product.quantity)

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={props.product.img} />
            </div>
            <div className="cart-item-desc">
                <h3 className="smol-header">{props.product.name} ({props.product.quantity} szt.)</h3>
                <div>
                    <span className="text-secondary break">Sprzedawca: {props.product.seller}</span>
                    <span className="text-secondary break">Producent: {props.product.producer}</span>
                </div>
            </div>
            <div className="cart-item-price">
                <h3 className="smol-header">
                    {priceTotal}
                </h3>
                <span className="text-secondary">{price} / szt.</span>
            </div>
            <div className="cart-item-actions">
                <input type="number" className="number-input" min="1" value={props.product.quantity} 
                    onChange={(e) => {changeCartItemQuantity(props.index, e.target.value)}} />
                <a onClick={(e) => {removeFromCart(props.index)}} href="#">Usun</a>
            </div>
        </div>
    )
}

export default CartItem