import React from 'react';
import { View, StyleSheet } from 'react-native';
import tw from 'twrnc';

// DottedLine component
const DottedLine = ({ color = 'black' }) => {
  const dotCount = 60; // Adjust the number of dots based on your requirement
  const dots = Array.from({ length: dotCount });

  return (
    <View style={tw`flex-row justify-between w-full`}>
      {dots.map((_, index) => (
        <View
          key={index}
          style={[
            tw`w-1 h-1 rounded-full`, // Adjust the size of dots here
            { backgroundColor: color },
          ]}
        />
      ))}
    </View>
  );
};

export default DottedLine;
