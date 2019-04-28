import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Hello from './demo/Hello';
import Bananas from './demo/Bananas';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
				<Stack key="root" hideNavBar={true}>
					<Scene key="login" component={Login} title="Login"/>
					<Scene key="signup" component={Signup} title="Register"/>
					<Scene key="hello" component={Hello} title="Hello"/>
					<Scene key="bananas" component={Bananas} title="Bananas" initial={true}/>
				</Stack>
			</Router>
		)
	}
}
