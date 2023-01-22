import { useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'

import Header from './Header'
import Terms from './Terms'
import FAQ from './FAQ'
import Products from './Products'
import Cart from './Cart'
import Contact from './Contact'
import LoginRegister from './LoginRegister'
import AccountPage from './AccountPage'
import CartCheckout from './CartCheckout'
import CartSuccess from './CartSuccess'

import { CartContext } from './CartContext'
import { AccountContext } from './AccountContext'

const ARBITRARY_DATE_VALUE = new Date(8640000000000);

function App() {
  const mountScrollAnimation = () => {
    let header = document.getElementsByClassName("divider")[0];

    let barLeft = document.getElementsByClassName("bar-left")[0];
    let barRight = document.getElementsByClassName("bar-right")[0];

    let offset = header.offsetTop + header.offsetHeight;

    let lastPageYOffset = 0

    const restartAnimation = (callback) => {
      let clonedLeft = barLeft.cloneNode(true);
      let clonedRight = barRight.cloneNode(true);

      barLeft.parentNode.replaceChild(clonedLeft, barLeft);
      barRight.parentNode.replaceChild(clonedRight, barRight);

      barLeft = clonedLeft
      barRight = clonedRight

    }

    const onScrolled = () => {
      console.log(window.pageYOffset, offset)
      if (window.pageYOffset > offset && lastPageYOffset < offset) {
        barLeft.classList.remove("off");
        barRight.classList.remove("off");

        barLeft.classList.add("on");
        barRight.classList.add("on");
        
        restartAnimation();
      } 
      else if (window.pageYOffset < offset && lastPageYOffset > offset)
      {
        barLeft.classList.remove("on");
        barRight.classList.remove("on");

        barLeft.classList.add("off");
        barRight.classList.add("off");

        restartAnimation();
      }

      lastPageYOffset = window.pageYOffset 
    }

    window.onscroll = onScrolled;
  }


  let [ cart, setCart ] = useState([])
  let [ account, setAccount ] = useState(null)

  
  const addToCart = (product) => {

    let cartCopy = cart.slice()

    let t = cartCopy.findIndex(item => item.name === product.name)
    if (t != -1) {
      cartCopy[t].quantity += 1;
    } else {
      cartCopy.push(product)
    }

    console.log(cartCopy)
    setCart(cartCopy);
  }

  const removeFromCart = (i) => {
    let cartCopy = cart.slice()
    cartCopy.splice(i, 1)
    setCart(cartCopy)
  }

  const changeCartItemQuantity = (i, v) => {
    let cartCopy = cart.slice()
    cartCopy[i].quantity = v
    setCart(cartCopy)
  }

  const clearCart = () => {
    setCart([])
  }

  const [cookies, setCookie, removeCookie] = useCookies();

  const removeAccount = () => {
    if (account == null) return;
    let cookie = Object.assign({}, cookies.accounts)

    delete cookie[account.email]

    setAccount(null)
    setCookie('accounts', cookie, {
      expires: ARBITRARY_DATE_VALUE
    })

    removeCookie('loggedAccount');
  }

  if (cookies.accounts === undefined) {
    setCookie('accounts', {}, {
      expires: ARBITRARY_DATE_VALUE
    })
  }

  useEffect(() => {
    if (cookies.loggedAccount !== undefined && cookies.accounts[cookies.loggedAccount] !== undefined) {
      setAccount(cookies.accounts[cookies.loggedAccount]);
    } else {
      removeCookie('loggedAccount');
    }
  }, [])
  
  useEffect(() => {
    if (account === null || account === undefined) {
      removeCookie('loggedAccount');
      return;
    }

    let cookie = Object.assign({}, cookies.accounts)
    cookie[account.email] = account

    setCookie('accounts', cookie, {
      expires: ARBITRARY_DATE_VALUE
    })

    setCookie('loggedAccount', account.email)
  }, [ account ])

  return (
    <CookiesProvider>
    <AccountContext.Provider value={{account, setAccount, removeAccount}}>
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeCartItemQuantity, clearCart }}>
      <div className="app">
        <Header onMounted={mountScrollAnimation} />
        <div className="bar-left"></div>
        <div className="bar-right"></div>
        <div className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<CartCheckout />} />
            <Route path="/cart/success" element={<CartSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lr" element={<LoginRegister />} />
            <Route path="/acc" element={<AccountPage />} />
            <Route
              path="/"
              element={<Navigate to="/products" replace />}
            />
          </Routes>
        </div>
      </div>
    </CartContext.Provider>
    </AccountContext.Provider>
    </CookiesProvider>
  )
}

export default App
