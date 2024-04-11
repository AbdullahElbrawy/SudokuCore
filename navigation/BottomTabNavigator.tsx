import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'; // Import HomeScreen
// import ChallengesScreen from './../screens/Challenges'; // Assuming you have a ChallengesScreen
import StatisticsScreen from '../screens/Statistics'; // Import StatisticsScreen

import HomeIcon from '../Assets/home'; // Import the SVG component as HomeIcon for clarity
import ChallengeIcon from '../Assets/challenge';
import StatisticsIcon from '../Assets/statistics';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        const iconSize = '20';
        if (route.name === 'Home') {
          return <HomeIcon width={iconSize} height={iconSize} fill={color} />;
        } else if (route.name === 'Challenges') {
          return <ChallengeIcon width={iconSize} height={iconSize} fill={color} />;
        } else if (route.name === 'Statistics') {
          return <StatisticsIcon width={iconSize} height={iconSize} fill={color} />;
        }
      },
      
      tabBarActiveTintColor: '#E61300',
      tabBarInactiveTintColor: '#2B2E4A',
      tabBarStyle: {display: 'flex', height: 65},
      tabBarItemStyle: {display: 'flex', flexDirection: 'column'},
      tabBarLabelStyle: {
        textTransform: 'none',
        padding: 0,
        marginBottom: 5,
      },
      headerShown:false
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen}   />
    <Tab.Screen name="Challenges" component={HomeScreen} />
    <Tab.Screen name="Statistics" component={StatisticsScreen} />
  </Tab.Navigator>
  );
}
