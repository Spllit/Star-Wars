import React, {Component} from "react";
import Header from '../Header/Header'
import Content from '../Content/Content'
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import './App.scss'

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <ErrorBoundry>
                    <Header/>
                    <Content/>                   
                </ErrorBoundry>
            </div>
        )
    }
}