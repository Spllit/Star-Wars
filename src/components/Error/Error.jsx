import React, {Component} from 'react'
import error from './img/error.png'
import './Error.scss'
export default class Error extends Component{
    render(){
        return(
            <div className='error '>
                <div className='error__container'>
                    <img src={error} alt="" />
                    <span>Opps.. something went wrong</span>
                </div>
            </div>
        )
    }
}