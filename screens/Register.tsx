// screens/RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from './../tailwind'
import RegisterVector from '../Assets/register'; // Ensure the path is correct for your project structure
const RegisterScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
        <RegisterVector />
      <Text style={tw`text-2xl mb-4`}>Register</Text>
      
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Username" 
      />
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Email" 
      />
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Password" 
        secureTextEntry={true} 
      />
      <TextInput 
        style={tw`border w-3/4 p-2 mb-4`} 
        placeholder="Confirm Password" 
        secureTextEntry={true} 
      />
      <TouchableOpacity 
        style={tw`bg-main w-3/4 p-2 items-center`}>
        <Text style={tw`text-white`}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
