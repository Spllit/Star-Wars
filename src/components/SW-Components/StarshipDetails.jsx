import ItemInfoLogic from "../ItemInfo/ItemInfoLogic"
import {Record} from '../ItemInfo/ItemInfo'
import WithSwapiServiceConsumer from '../HOC-Helper/WithSwapiServiceConsumer'

const StrashipDetails = (props) => {
    const {getSpecificStarship} = props.SwapiService
    return(
        <ItemInfoLogic {...props} getData = {getSpecificStarship}>
            <Record field = {'model'} label = {'Model'}/>
            <Record field = {'crew'} label = {'Crew'}/>
            <Record field = {'length'} label = {'Length'}/>
        </ItemInfoLogic>
    )
}
export default WithSwapiServiceConsumer(StrashipDetails)