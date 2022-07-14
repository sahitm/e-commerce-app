import React from 'react'
import { useContext } from 'react';
import {Context} from '../Context/Context'
import Image from '../components/Image'

function Photos() {

    const {allPhotos} = useContext(Context)
    
    const imgElements = allPhotos.map(obj => {
        return <Image url={obj.url} id={obj.id} isFavorite={obj.isFavorite} Obj={obj}/>
    }) 
    return (
        <main className="photos">
            {imgElements}
        </main>
    )
}

export default Photos;