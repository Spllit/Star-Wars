import ItemInfoLogic from '../ItemInfo/ItemInfoLogic';
import { Record } from '../ItemInfo/ItemInfo';
import WithSwapiServiceConsumer from '../HOC-Helper/WithSwapiServiceConsumer';

const PersonDetails = (props) => {
	const { getPerson } = props.SwapiService;
	console.log(getPerson);
	return (
		<ItemInfoLogic {...props} getData={getPerson}>
			<Record field={'birthYear'} label={'Birth Year'} />
			<Record field={'gender'} label={'Gender'} />
			<Record field={'height'} label={'Height'} />
		</ItemInfoLogic>
	);
};
export default WithSwapiServiceConsumer(PersonDetails);
