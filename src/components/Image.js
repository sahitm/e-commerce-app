import React from 'react'
import { useContext } from 'react'
import {Context} from '../Context/Context' 

function Image(props) {

    const [hovered,setHovered] = React.useState(false)
    const {toggleFavorite,addToCart,cartItems,removeFromCart} = useContext(Context)

    function heartIcon(){
        if(props.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.id)}></i>
        }else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.url === props.url)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.url)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.Obj)}></i>
        }
    }

    return ( 
        <div            
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`image-container`}
        >
           <img 
           className="image-grid img"    
           src={props.url}               
           alt={props.id}
            />  

            {heartIcon()}
            {cartIcon()}

        </div>
        
     )
}

export default Image;