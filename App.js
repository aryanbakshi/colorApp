import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'App',
    },
});

export default createAppContainer(navigator);