import React, { Component } from 'react';
import { AppRegister, dataSource, ListView, View, Text } from 'react-native';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2, }).cloneWithRows(['string1', 'string2', 'string3']),
		};
	}
	renderRow(data) {
		return(
			<Text>{'\u2022'} {data}</Text>
		);
	}
	render() {
		return(
			<ListView style={{margin: 40}} dataSource={this.state.dataSource} renderRow={this.renderRow} />
		);
	}
}
// AppRegistry.registerComponent('AwesomeProject', () => Home);
