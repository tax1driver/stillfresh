import { useContext } from 'react'
import { ReactComponent as CartAddIcon } from './cartAddIcon.svg';
import {CartContext} from './CartContext';

function Product(props) {
    let {cart, addToCart, removeFromCart, changeCartItemQuantity} = useContext(CartContext)

    const onClickButton = () => {
        let cartItem = Object.assign({}, props.product)

        cartItem.quantity = 1
        addToCart(cartItem)
    }

    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    })

    let price = formatter.format(props.product.price)

    const dateFormatter = new Intl.RelativeTimeFormat('pl-PL')
    return (
        <div className="product">
            <div className="product-image">
                <img src={props.product.img} />
            </div>
            <div className="product-text">
                 <div className="product-name">
                    {props.product.name}
                </div>
                <span className="text-center">{price}</span>
                <div className="product-desc text-secondary">
                    <span className="block">Ważność upływa: <b>{dateFormatter.format(props.product.waznosc, 'days')}</b></span>
                    <span className="block">Sprzedawca: <b>{props.product.seller}</b></span>
                    <span className="block">Producent: <b>{props.product.producer}</b></span>
                </div>
                <div className="product-btn-area">
                    <a className="add-to-cart" onClick={onClickButton} href="#/products"><CartAddIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Product