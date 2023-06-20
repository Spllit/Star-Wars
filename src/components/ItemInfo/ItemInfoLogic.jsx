import React, {Component} from 'react'
import ItemInfo from './ItemInfo'

export default class ItemInfoLogic extends Component{
    state = {
        activeItem: {}
    }
    componentDidUpdate(prevProps){
        if(this.props.activeId !== prevProps.activeId){
            this.getData()
        }
    }
    updateState = (result) => {
        console.log(result)
        this.setState(() => ({activeItem: result}))
    }
    getData(){
        const {activeId, getData} = this.props
        getData(activeId)
        .then(
            this.updateState
        )
    }
    render(){
        return(
            <ItemInfo activeItem = {this.state.activeItem} {...this.props}/>
        )
    }
}
