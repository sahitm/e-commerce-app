import React from 'react'
import {Link} from 'react-router-dom'

import {Context} from "../Context/Context"

function Header() {

    const {cartItems} = React.useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            
            <h2><Link to="/">Photozon</Link></h2>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
           
        </header>
    )
}

export default Header;
