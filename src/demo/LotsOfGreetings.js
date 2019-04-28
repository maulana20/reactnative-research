import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Greeting extends Component {
	render() {
		return(
			<View style={{alignItems: 'center'}}>
				<Text>Hello {{this.props.name}}</Text>
			</View>
		);
	}
}

export default class LotsOfGreetings extends Component {
	render() {
		return(
			<View style={{alignItems: 'center', top: 50}}>
				<Greeting name='Rexxar' />
				<Greeting name='jaina' />
			</View>
		);
	}
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
