import React, { Component } from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends Component {
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render() {
		return (
			<View>
				<Text>Chat with Lucy</Text>
			</View>
		);
	}
}
class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>Hello, Chat App!</Text>
				<Button onPress={() => navigate('Chat')} title="Chat with Lucy" />
			</View>
		);
	}
}
const Navigasi = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
}); 
AppRegistry.registerComponent('AwesomeProject', () => Navigasi);
