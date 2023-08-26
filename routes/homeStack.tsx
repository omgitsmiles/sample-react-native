import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import List from '../List';

const screens = {
    List: {
        screen: List
    },
    Home: {
        screen: App
    },
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);