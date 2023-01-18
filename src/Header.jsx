import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { CartContext } from './CartContext';
import { AccountContext } from './AccountContext'

function Header(props) {
    let { cart } = useContext(CartContext)

    useEffect(() => {
        props.onMounted()
    }, [])

    return (
        <div className="logoandnavbar">
            <div className="logo">
                <a href="/">Still <b>Fresh</b></a>
                <span className="divider"></span>
            </div>
            <div className="navbar">
                <NavLink to="/products">Produkty</NavLink>
                <NavLink to="/terms">Regulamin</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/contact">Kontakt</NavLink>
                <NavLink to="/cart">Koszyk ({cart.length})</NavLink>
            </div>
        </div>
    )
}

export default Header