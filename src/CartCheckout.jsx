import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from './AddressForm'
import { CartContext } from './CartContext'
import { AccountContext } from "./AccountContext"

function CartCheckout() {
    let { account } = useContext(AccountContext)
    let { cart, clearCart } = useContext(CartContext)
    let [ selections, setSelections ] = useState({
        shipping: "ue",
        payment: "blik"
    });

    const navigate = useNavigate()

    const shippings = {
        ue: {
            name: "Uber Eats",
            price: 12.99
        },
        wolt: {
            name: "Wolt",
            price: 11.49
        },
        personal: {
            name: "Odbiór osobisty",
            price: 0.00
        }
    }

    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    })

    const handleChange = (e) => {
        let formCopy = Object.assign({}, selections)

        formCopy[e.target.name] = e.target.value

        setSelections(formCopy)
    }

    const gotoPayment = (e) => {
        // zapisac carta do historii zamowien??
        clearCart()
        navigate("/cart/success")
    }

    const cancelOrder = (e) => {
        navigate("/cart")
    }

    const ShippingElement = (() => {
        return (
            <Fragment>
                <div>
                    {cart.length + 1}
                </div>
                <div>
                    Dostawa ({shippings[selections.shipping].name})
                </div>
                <div></div>
                <div>
                    {formatter.format(shippings[selections.shipping].price)}
                </div>
            </Fragment>
        )
    })

    const hasSetShippingAddr = (account.addrStreet !== "" && account.addrPostcode !== "" && account.addrCity !== "");
    let totalInCart = 0;

    return (
        <div className="p-15">
            <div className="account-header">
                <h1 style={{marginBottom: 4 + "px"}}>Finalizacja zamówienia</h1>
                <span className="text-secondary">Sprawdź poprawność poniższych danych</span>
            </div>

            <div>
                <h3>Zamawiane produkty</h3>
                <div className="checkout-grid">
                    <div>
                        <b>#</b>
                    </div>
                    <div>
                        <b>Produkt</b>
                    </div>
                    <div>
                        <b>Sprzedawca / Producent</b>
                    </div>
                    <div>
                        <b>Cena za szt. / Cena łącznie</b>
                    </div>
                    {
                        cart.map((item, i) => {
                           
                        
                            let price = formatter.format(item.price)
                            let priceTotal = formatter.format(item.price * item.quantity)
                            
                            totalInCart += item.price
                            return (
                                <Fragment>
                                    <div>
                                        {i+1}
                                    </div>
                                    <div>
                                        {item.name} ({item.quantity} szt.)
                                    </div>
                                    <div>
                                        {item.seller} / {item.producer}
                                    </div>
                                    <div>
                                        {price} / {priceTotal}
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                    <ShippingElement />
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <b>Suma:</b>
                    </div>
                    <div>
                        <b>{formatter.format(totalInCart + shippings[selections.shipping].price)}</b>
                    </div>
                </div>
            </div>

            {<AddressForm />}
            <div>
                <h3>Metoda dostawy</h3>
                <select name="shipping" value={selections.shipping} onChange={handleChange}>
                    <option value="ue">Uber Eats (12,99zł)</option>
                    <option value="wolt">Wolt (11,49zł)</option>
                    <option value="personal">Odbiór osobisty (0zł)</option>
                </select>
            </div>

            <div className="mb">
                <h3>Metoda płatności</h3>
                <select name="payment" value={selections.payment} onChange={handleChange}>
                    <option value="blik">BLIK</option>
                    <option value="cc">Karta kredytowa</option>
                    <option value="ft">Szybki przelew</option>
                </select>
            </div>

            <div className="mb">
                <h3>Łącznie do zapłaty</h3>
                <span className="summary">{formatter.format(totalInCart + shippings[selections.shipping].price)}</span>
            </div>
            {(
                () => {
                    if (!hasSetShippingAddr) {
                        return (
                            <div className="mb">
                                <span className="text-error">Proszę wprowadzić adres.</span>
                            </div>
                        )
                    }
                }
            )()}

            <div>
                <button disabled={!hasSetShippingAddr} onClick={gotoPayment} className="btn btn-green">Kontynuuj do płatności</button>
                <button onClick={cancelOrder} className="btn btn-red">Powrót do koszyka</button>
            </div>
        </div>
    )
}

export default CartCheckout;