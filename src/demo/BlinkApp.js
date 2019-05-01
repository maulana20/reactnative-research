import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
	constructor(props) {
		super(props);
		this.state = { isShow: true };
		setInterval(() => (
			this.setState(blink => ({ isShow: !blink.isShow }))
		), 1000);
	}
	render() {
		if (!this.state.isShow) return null;
		return (
			<Text>{this.props.text}</Text>
		);
	}
}
export default class BlinkApp extends Component {
	render() {
		return (
			<View>
				<Blink text='I love to blink' />
				<Blink text='Yes blinking is so great' />
				<Blink text='Why did they ever take this out of HTML' />
				<Blink text='Look at me look at me look at me' />
			</View>
		);
	}
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
