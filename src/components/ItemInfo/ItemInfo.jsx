import React, { Component } from 'react';
import './ItemInfo.scss';

const Record = (props) => {
	const { field } = props;
	return (
		<li className="list-group-item">
			<span>{props.label}:</span>
			<span> {props[field]}</span>
		</li>
	);
};
export { Record };

export default class ItemInfo extends Component {
	content = () => {
		const { activeItem } = this.props;
		return (
			<div className="itemInfo__header">
				<div className="itemInfo__pic">
					<img src={activeItem.imgSrc} alt="currentImage" />
				</div>
				<div className="itemInfo__info">
					<div className="itemInfo__name">
						<h2>{activeItem.name}</h2>
					</div>
					<ul className="itemInfo__description">
						{React.Children.map(this.props.children, (child) => {
							console.log(activeItem.parametres);
							return React.cloneElement(child, activeItem.parametres);
						})}
					</ul>
				</div>
			</div>
		);
	};
	emptyContent = () => {
		return <div>Please, choose something from the list in the left section</div>;
	};
	isPropsEmpty = (obj) => {
		for (let prop in obj) return false;
		return true;
	};
	render() {
		const { activeItem } = this.props;
		const showContent = !this.isPropsEmpty(activeItem) ? this.content() : this.emptyContent();
		return (
			<section className="itemInfo section">
				<div className="itemInfo__container">{showContent}</div>
			</section>
		);
	}
}
