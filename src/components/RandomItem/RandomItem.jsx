import React, {Component} from "react";
import SwapiService from '../Services/Swapi-service'
import './RandomItem.scss'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import Error from '../Error/Error'
import Arrow from './icons/arrow.svg'

export default class RandomItem extends Component{
    constructor(){
        super()
        this.state = {
            person: {},
            loading: true,
            error: false,
            currentID: 1,
        }
        this.minId = 1
        this.maxId = 83
        
    }
    componentDidMount(){
        this.getData()
    }
    onLoadError = () => {
        this.setState(() => ({
            loading:false,
            error:true,
        }))

    }
    onPersonLoaded = (person) => {
        this.setState(() => ({
            person: person,
            loading: false,
            error:false
        }))

    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.currentID !== prevState.currentID){
            this.getData()
        }
    }
    getData(){
        const {currentID} = this.state
        const Swapi = new SwapiService()
        Swapi.getPerson(currentID)
        .then(
            this.onPersonLoaded
        )
        .catch(
            this.onLoadError
        )
    }

    previousSlide = () => {
        this.setState(({currentID}) => {
            const {minId, maxId} = this
            currentID--
            if(currentID < minId){
                return {
                    currentID: maxId
                }
            }
            return{
                currentID: currentID
            }
        })
    }
    nextSlide = () => {
        this.setState(({currentID}) => {
            const {minId, maxId} = this
            currentID++
            if(currentID > maxId){
                return {
                    currentID: minId
                }   
            }
            return{
                currentID: currentID
            }
        })
    }

    PeopleDescription(person){
        const {id, name, parametres: {birthYear, height, gender}} = person
        return(
            <React.Fragment>
            <div className="randomItem__container">
                <div className="randomItem__pic">
                    <img src={`https://starwars-visualguide.com//assets/img/characters/${id}.jpg`} alt="CurrentImage"/>
                </div>
                <div className="randomItem__description-container">
                    <h2 className="randomItem__name">{name}</h2>
                    <ul className="randomItem__info">
                        <li>Birth year: <span>{birthYear}</span></li>
                        <li>Height: <span>{height}</span></li>
                        <li>Gender: <span>{gender}</span></li>
                    </ul>
                </div>

            </div>
            </React.Fragment>
        )
    }
    Navigation(){
        return(
            <div className="randomItem__navigation">
                <div className="randomItem__navigation-container">
                    <div className="leftArrow">
                        <button onClick={this.previousSlide}><img className="leftArrow__img" src={Arrow} alt="Arrow" /></button>
                    </div>
                    <div className="rightArrow">
                        <button onClick={this.nextSlide}><img className="rightArrow__img" src={Arrow} alt="Arrow" /></button>
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        const {person, loading, error} = this.state
        const isOk = !loading && !error
        const errorPage = error ? <Error/> : null
        const spinner = loading ? <LoadingComponent/> : null
        const content = isOk ? this.PeopleDescription(person) : null
        const navigation = this.Navigation()
        return(
            <section className="randomItem section">
                {spinner}
                {errorPage}
                {content}
                {navigation}
            </section>
        )
    }
   
}