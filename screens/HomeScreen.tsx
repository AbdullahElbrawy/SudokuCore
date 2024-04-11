// HomeScreen.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';
import Logo from '../Assets/Logo'; // Import the SVG component
import TargetChallenge from '../Assets/TargetChallenge'; // Import the SVG component
import Trophy from '../Assets/Trophy'; // Import the SVG component
import CogSettings from '../Assets/CogSettings'

import ArrowNext from '../Assets/ArrowNext';
// import Tabs from '../navigation/BottomTabNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation}) {
  
  const handlePress = ()=>{
    navigation.navigate('NewGame')
  }

  return (
    <View style={tw`flex-1  bg-white  items-center justify-between`}>
     <View style={tw`w-full flex flex-col px-6`}>
    <View style={tw`flex flex-row justify-between items-center w-full py-5 `}>
    <Trophy width={32} height={32} fill='#2B2E4A'/>
    <CogSettings width={32} height={32} fill='#2B2E4A' />
    </View>
    <View style={tw`bg-black rounded-lg flex flex-row p-5  items-center justify-between w-full `}>
      <TargetChallenge aria-label="My SVG Icon"  width={80} height={80}/>
      <View>
      <Text style={tw`text-white text-lg`}>Daily challenge</Text>
        <Text style={tw`text-white text-sm`}>Feb 28, 2023</Text>
      </View>
      <ArrowNext aria-label="My SVG Icon"  width={40} height={40} fill={'#E61300'} style={tw`mt-6`} />
      </View>
</View>


   

      {/* <Text style={tw`text-red-600 text-4xl font-bold my-4`}>sudokucore</Text>
       */}
      <Logo  width={200} height={100}   aria-label="My SVG Icon" />
      <View style={tw`w-full flex flex-col px-6`}>
      <Pressable style={tw`bg-red-600 w-[100%] py-3 rounded-full my-2`} onPressIn={handlePress}>
        <Text style={tw`text-white text-center`}>New Game</Text>
      </Pressable>

      <Pressable style={tw`border border-red-600 w-[100%] py-3 rounded-full my-2`}>
        <Text style={tw`text-red-600 text-center`}>Continue</Text>
      </Pressable>

      </View>
     
      <View style={tw`w-full`}>
          {/* Bottom Navigation Bar */}
         <View style={tw`flex w-full flex-row justify-around items-center bg-white   absolute bottom-[0] left-0 right-0`}>
     
          </View> 
      
        </View>
    </View>
  );
}
