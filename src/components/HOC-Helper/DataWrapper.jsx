import React, { Component } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const DataWrapper = (View, getData) => {
	return class extends Component {
		state = {
			data: null,
		};
		componentDidMount() {
			this.getData();
		}
		onLoadData = (result) => {
			this.setState({ data: result });
		};
		async getData() {
			await getData().then(this.onLoadData);
		}
		render() {
			const { data } = this.state;
			if (!data) {
				return <LoadingComponent />;
			}
			return <View {...this.props} data={data} />;
		}
	};
};
export default DataWrapper;
