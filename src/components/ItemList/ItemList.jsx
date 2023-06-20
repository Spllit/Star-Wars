import React from "react";
import './ItemList.scss'
import SingleItem from '../SingleItem/SingleItem'

const ItemList = (props) => {
    const {onActiveChange, data} = props
    const titles = data.map((item, index) => {
        return(
            <SingleItem
            key = {index}
            name = {item.name}
            imgSrc = {item.imgSrc}
            onActiveChange = {() => onActiveChange(+item.id)}
        />
        )
    })
    return(
        <section className="itemList section">
            <ul className="itemList__container">
                {titles}
            </ul>    
        </section>
    )
}
export default ItemList