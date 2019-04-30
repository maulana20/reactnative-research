import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

import Hello from './demo/Hello';
import Bananas from './demo/Bananas';
import LotsOfStyles from './demo/LotsOfStyles';
import FixedDimensionsBasics from './demo/FixedDimensionsBasics';
import FixedDimensionsBasics2 from './demo/FixedDimensionsBasics2';
import FixedDirectionBasics from './demo/FixedDirectionBasics';
import JustifyContentBasics from './demo/JustifyContentBasics';
import AlignItemsBasics from './demo/AlignItemsBasics';
import PizzaTranslator from './demo/PizzaTranslator';
import ButtonBasics from './demo/ButtonBasics';
import Touchables from './demo/Touchables';
import Home from './demo/Home';
import IScrolledDownAndWhatHappenedNextShockedMe from './demo/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './demo/FlatListBasics';
import SectionListBasics from './demo/SectionListBasics';
import FetchExample from './demo/FetchExample';

import Popup from './continue/Popup';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
				<Stack key="root" hideNavBar={true}>
					<Scene key="login" component={Login} title="Login"/>
					<Scene key="signup" component={Signup} title="Register"/>
					
					<Scene key="hello" component={Hello} title="Hello"/>
					<Scene key="bananas" component={Bananas} title="Bananas"/>
					<Scene key="lotofstyles" component={LotsOfStyles} title="LotsOfStyles"/>
					<Scene key="fixeddimensionsbasics" component={FixedDimensionsBasics} title="FixedDimensionsBasics"/>
					<Scene key="fixeddimensionsbasics2" component={FixedDimensionsBasics2} title="FixedDimensionsBasics2"/>
					<Scene key="fixeddirectionbasics" component={FixedDirectionBasics} title="FixedDirectionBasics"/>
					<Scene key="jusctifycontentbasics" component={JustifyContentBasics} title="JustifyContentBasics"/>
					<Scene key="alignitemsbasics" component={AlignItemsBasics} title="AlignItemsBasics"/>
					<Scene key="pizzatranslator" component={PizzaTranslator} title="PizzaTranslator"/>
					<Scene key="buttonbasics" component={ButtonBasics} title="ButtonBasics"/>
					<Scene key="touchables" component={Touchables} title="Touchables"/>
					<Scene key="home" component={Home} title="Home"/>
					<Scene key="iscrolleddownandwhathappenednextshockedme" component={IScrolledDownAndWhatHappenedNextShockedMe} title="IScrolledDownAndWhatHappenedNextShockedMe"/>
					<Scene key="flatlistbasics" component={FlatListBasics} title="FlatListBasics"/>
					<Scene key="sectionlistbasics" component={SectionListBasics} title="SectionListBasics"/>
					<Scene key="fetchexample" component={FetchExample} title="FetchExample"/>
					
					<Scene key="popup" component={Popup} title="Popup" initial={true}/>
				</Stack>
			</Router>
		)
	}
}
