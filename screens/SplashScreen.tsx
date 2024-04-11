// SplashScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const SplashScreen: React.FC = ({navigation}:any) => {
  React.useEffect(() => {
    setTimeout(()=> navigation.navigate('Main') ,600)
    
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./../Assets/splash.png')} style={styles.logo} />
      {/* Additional UI elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Replace with your desired background color
  },
  logo: {
    width: 200, // Adjust based on your image
    height: 200, // Adjust based on your image
    resizeMode: 'contain',
  },
  // Add additional styles if needed
});

export default SplashScreen;
