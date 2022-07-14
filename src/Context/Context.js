import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [allPhotos,setAllPhotos] = React.useState([])
    const [cartItems,setCartItems] = React.useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))

    },[])

    function toggleFavorite(id){
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem){
        setCartItems(prevCartItems => [...prevCartItems,newItem])
    }
    
    function removeFromCart(url){
        setCartItems(prevCartItems => prevCartItems.filter(item => item.url !== url))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{allPhotos , toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}