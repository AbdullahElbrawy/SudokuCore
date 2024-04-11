import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewGame from './screens/NewGame';


import BottomTabNavigator from './navigation/BottomTabNavigator';
import SplashScreen from './screens/SplashScreen';
import { Provider } from 'react-redux'; // Import Provider
import { store } from './Redux/store'; // Adjust the path to your store as necessary

const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={store}>
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Splash" component={SplashScreen} />
  <Stack.Screen name="NewGame" component={NewGame} />
  <Stack.Screen name="Main" component={BottomTabNavigator}  />
</Stack.Navigator>
</NavigationContainer>
</Provider>
  );
}


export default App;

