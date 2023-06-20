import React, {Component} from "react";

export default class SingleItem extends Component{
    render(){
        const {name, onActiveChange, imgSrc} = this.props
        return(
            <li className="itemList__item"
            onClick = {onActiveChange}>
                <div className="itemList__pic"><img src={imgSrc} alt={name} /></div>
                <div className='itemList__info'>{name}</div>
            </li>
        )
    }
}