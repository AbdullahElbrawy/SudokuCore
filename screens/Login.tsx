// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from './../tailwind'
import LoginVector from '../Assets/login'; // Ensure the path is correct for your project structure

const LoginScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <LoginVector />
      <Text style={tw`text-xl mb-4`}>Login</Text>
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Email" 
      />
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Password" 
        secureTextEntry={true} 
      />
      <TouchableOpacity 
        style={tw`bg-main w-3/4 p-2 items-center`}>
        <Text style={tw`text-white`}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
