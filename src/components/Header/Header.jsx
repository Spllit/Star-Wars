import React, {Component} from "react";
import Logo from '../logo/Logo'
import './Header.scss'

export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="header__container">
                <Logo/>
                {/* <nav className="header__nav">
                    <ul>
                        <li>
                            <button className="header__tab" type="button" href='#'>starships</button>
                        </li>
                        <li>
                            <button className="header__tab" type="button" href='#'>people</button>
                        </li>
                        <li>
                            <button className="header__tab" type="button" href='#'>planets</button>
                        </li>
                    </ul>
                </nav> */}
                </div>
            </header>
        )
    }
}