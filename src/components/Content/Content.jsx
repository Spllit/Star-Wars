import React, { Component } from 'react';
import RandomItem from '../RandomItem/RandomItem';

import SwapiService from '../Services/Swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import { PersonList, PlanetList, StrashipList } from '../SW-Components/ItemLists';
import PersonDetails from '../SW-Components/PersonDetails';
import { SwapiServiceProvider } from '../SwapiServiceContext/SwapiServiceContext';

export default class Content extends Component {
	Swapi = new SwapiService();
	state = {
		isError: false,
		activeId: null,
	};
	onActiveChange = (id) => {
		this.setState(() => ({ activeId: id }));
	};
	componentDidCatch() {
		this.setState({ isError: true });
	}
	render() {
		return (
			<div className="content">
				<SwapiServiceProvider value={this.Swapi}>
					<ErrorBoundry>
						<RandomItem />
					</ErrorBoundry>
					<ErrorBoundry>
						<PersonList onActiveChange={this.onActiveChange} />
					</ErrorBoundry>
					<ErrorBoundry>
						<PersonDetails activeId={this.state.activeId} />
					</ErrorBoundry>
				</SwapiServiceProvider>
			</div>
		);
	}
}
