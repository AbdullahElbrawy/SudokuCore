import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import tw from 'twrnc';

import CogSettings from '../Assets/CogSettings';
import LeftBack from '../Assets/LeftBack';
import Level from '../Assets/Level'; 

type Level = 'Easy' | 'Medium' | 'Hard' | 'Expert';

const dataLevels: Level[] = ['Easy', 'Medium', 'Hard', 'Expert'];

const NewGame: React.FC = ({navigation}:any) => {
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);

  const HandleLevelChoose = (level: Level) => {
    setActiveLevel(level);
  };
  const handleBack = () => {
    navigation.goBack()
  };



  return (
    <View style={tw`flex-1 bg-white items-center `}>
      <View style={tw`w-full flex flex-col px-6 mb-6`}>
        <View style={tw`flex flex-row justify-between items-center w-full py-5`}>
        <Pressable onPress={() => handleBack()}     pressRetentionOffset={{ top: 10, left: 10, bottom: 10, right: 10 }} >
            <LeftBack width={24} height={24} fill='#2B2E4A' />
          </Pressable>
          <Pressable onPress={() => { /* Handle settings press */ }}>
            <CogSettings width={24} height={24} fill='#2B2E4A' />
          </Pressable>
        </View>
      </View>

        <View style={tw`flex flex-col items-center gap-6`}>
          {dataLevels.map((level) => (
            <Pressable
            
            style={({ pressed }) => [
              tw`items-center mb-6`,
           
            ]}
            key={level}
            onPress={() => HandleLevelChoose(level)}
            pressRetentionOffset={{ top: 1, left: 1, bottom: 1, right: 1 }} 
          >
              <View style={tw`${activeLevel === level ? 'p-6  rounded-2xl border border-red-500' : ''}`}>
                <Level width={32} height={32} fill={activeLevel === level ? '#E53E3E' : '#2B2E4A'} />
              </View>
              <Text style={tw`${activeLevel === level ? 'text-red-600' : 'text-gray-600'} text-lg  mt-3 font-bold `}>
                {level}
              </Text>
            </Pressable>
          ))}
        </View>
    
      <View style={tw`w-full flex flex-col px-6`}>
        <Pressable style={tw`bg-red-600 w-full py-3 rounded-full my-2`}>
          <Text style={tw`text-white text-center`}>Play</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewGame;
