import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { CartContext } from './CartContext';
import { AccountContext } from './AccountContext'

import { ReactComponent as CartIcon } from './cartIcon.svg'
import { ReactComponent as UserIcon } from './userIcon.svg'

function Header(props) {
    let { account, setAccount } = useContext(AccountContext)
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
                {(() => {
                    if (account === null) {
                        return ( 
                            <NavLink to="/lr">Logowanie</NavLink>
                        )
                    } else {
                        return (
                            <NavLink to="/acc" className="navbar-user">
                                <UserIcon className="icon-user"/>
                                <span>{account.name}</span>
                            </NavLink>
                        )
                    }
                })()}
                <NavLink to="/cart">
                    <CartIcon className="icon-cart"/> 
                    <span>({cart.length})</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Header