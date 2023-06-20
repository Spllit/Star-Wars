import ItemInfoLogic from "../ItemInfo/ItemInfoLogic"
import {Record} from '../ItemInfo/ItemInfo'
import WithSwapiServiceConsumer from '../HOC-Helper/WithSwapiServiceConsumer'

const PlanetDetails = (props) => {
    const {getSpecificPlanet} = props.SwapiService
    return(
        <ItemInfoLogic {...props} getData = {getSpecificPlanet}>
            <Record field = {'diameter'} label = {'Diameter'}/>
            <Record field = {'gravity'} label = {'Gravity'}/>
            <Record field = {'population'} label = {'Population'}/>
            <Record field = {'climate'} label = {'Climate'}/>
        </ItemInfoLogic>
    )
}
export default WithSwapiServiceConsumer(PlanetDetails)