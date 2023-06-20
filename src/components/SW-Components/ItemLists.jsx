import ItemList from '../ItemList/ItemList'
import SwapiService from '../Services/Swapi-service'
import DataWrapper from '../HOC-Helper/DataWrapper'

const Swapi = new SwapiService()
const {
    getPeople,
    getPlanets,
    getStarships
} = Swapi

const PersonList = DataWrapper(ItemList, getPeople,)
const PlanetList =  DataWrapper(ItemList, getPlanets)
const StrashipList = DataWrapper(ItemList, getStarships)
export{
    PersonList,
    PlanetList,
    StrashipList,
}