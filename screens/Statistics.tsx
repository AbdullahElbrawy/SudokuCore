import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from './../tailwind'
import Stars from '../Assets/Stars';
import Brain from '../Assets/Brain';
import BullsEye from '../Assets/BullsEye';
import Target from '../Assets/Target';
import TimeClockBest from '../Assets/TimeClockBest';
import TimeClock from '../Assets/TimeClock';
import Score from '../Assets/Score';
import Rocket from '../Assets/Rocket';
import DottedLine from '../Components/Border';


const difficulties = [ 'Easy', 'Medium', 'Hard', 'Expert'];

type StatsCardProps = {
  title: string;
  value: string | number;
  iconName: string;
};

const Icon: React.FC<{ name: string }> = ({ name }) =>{
    switch(name){
      case 'gamesStarted':
        return <Stars width={24} height={24} fill="#ffff" />
    
      case 'gamesWon':
        return <Brain width={24} height={24} fill="#ffff"/>  
 
      case 'winRate':
        return  <BullsEye  width={24} height={24} fill="#ffff"/>
 
       case 'wonWithNoMistakes':
        return  <Target  width={24} height={24} fill="#ffff"/>
  
       case  "bestTime":
        return <TimeClockBest  width={24} height={24} fill="#ffff"/>
   
       case  "avergeTime":
        return <TimeClock  width={24} height={24} fill="#ffff"/> 
  
       case "bestScroe":
      return <Score width={24} height={24} fill="#ffff"/> 
      
       default:
      return  <Rocket width={24} height={24} fill="#ffff" />
         
    }
    }


const StatsCard: React.FC<StatsCardProps> = ({ title, value, iconName }) => (
  <View style={tw`flex-row items-center justify-between bg-sub p-4 mb-2 rounded-lg`}>
       <View style={tw`flex-col items-between bg-sub  mb-2 `}> 
    <Icon name={iconName} />
 
    <Text style={tw`flex-1  mt-2 text-md text-white`}>{title}</Text>
    </View>
    <Text style={tw`text-md font-bold text-white`}>{value}</Text>
   
  
  </View>
);

const StatisticsScreen: React.FC = () => {
  const [activeDifficulty, setActiveDifficulty] = useState<string>(difficulties[0]);

  const handleSelectDifficulty = (difficulty: string) => {
    setActiveDifficulty(difficulty);
    // Apply filters based on selected difficulty
    // Update your data here
  };

  return (
    <ScrollView style={tw` bg-white p-4`}>
      <View style={tw`flex-row justify-between w-full px-2 mb-3`}>
        {difficulties.map((difficulty) => (
          <TouchableOpacity
            key={difficulty}
            onPress={() => handleSelectDifficulty(difficulty)}
            style={tw`px-3 py-1 ${activeDifficulty === difficulty ? 'bg-main' : 'bg-white'} rounded-full`}
          >
            <Text style={tw`${activeDifficulty === difficulty ? 'text-white' : 'text-sub'} text-sm font-bold`}>
              {difficulty}
            </Text>
          </TouchableOpacity>
        ))}
            
      </View>
      <DottedLine color="#1F1F1F" /> 
      <Text style={tw`self-start mt-6 mb-2 text-xl font-bold`}>Games</Text>
      <StatsCard title="Games started" value="1000" iconName="gamesStarted" />
      <StatsCard title="Games Won" value="1000" iconName="gamesWon" />
      <StatsCard title="Win Rate" value="80%" iconName="winRate" />
      <StatsCard title="Wins with no mistakes" value="-" iconName="wonWithNoMistakes" />
      
      <Text style={tw`self-start mt-6 mb-2 text-xl font-bold`}>Time</Text>
      <StatsCard title="Best time" value="100 min" iconName="bestTime" />
      <StatsCard title="Average Time" value="200 min" iconName="avergeTime" />
      
      <Text style={tw`self-start mt-6 mb-2 text-xl font-bold`}>Score</Text>
      <StatsCard title="Best score" value="1000" iconName="bestScroe" />
      <StatsCard title="Average Score" value="5000" iconName="avergeScore" />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default StatisticsScreen;
