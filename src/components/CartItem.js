import React from "react"
import { useContext } from 'react';
import {Context} from '../Context/Context'

function CartItem({item}) {

    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.url)}></i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem