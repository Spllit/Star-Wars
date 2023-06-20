import React, {Component} from 'react'
import './LoadingComponent.scss'

export default class LoadingComponent extends Component{
    render(){
        return (
            <div className='loader'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        )
    }
}