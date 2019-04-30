import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Alert, TextInput, View, Text } from 'react-native';

export default class Popup extends Component {
	constructor(props) {
		super(props)
		this.state = { user: '', }
	}
	onPress() {
		Alert.alert(this.state.user)
		this.setState({user: ''})
	}
	render() {
		return(
			<View style={styles.body}>
				<View style={styles.form}>
					<TextInput style={styles.input} underlineColorAndroid='rgba(0,0,0,0)' onChangeText={(text) => this.setState({ user: text })}></TextInput>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText} onPress={() => this.onPress()}>Popup</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body : { backgroundColor:'#455a64', flex: 1, alignItems:'center', justifyContent :'center' },
	form : { flexGrow: 1, justifyContent:'center', alignItems: 'center' },
	input: { width:300, backgroundColor:'rgba(255, 255,255,0.2)', borderRadius: 25, paddingHorizontal:16, fontSize:16, color:'#ffffff', marginVertical: 10 },
	button: { width:300, backgroundColor:'#1c313a', borderRadius: 25, marginVertical: 10, paddingVertical: 13 },
	buttonText: { fontSize:16, fontWeight:'500', color:'#ffffff', textAlign:'center' }
});
