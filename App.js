import  React, { useCallback } from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import MainStack from './navigate';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'fs-Medium': require('./assets/fonts/FiraSans-Medium.ttf'),
    'fs-Regular': require('./assets/fonts/FiraSans-Regular.ttf'),
    'fs-SemiBold': require('./assets/fonts/FiraSans-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  
  return (
    <MainStack />
  );
        
}

const styles = StyleSheet.create({
  content: {
  backgroundColor: '#FFFAEE'
  },
  text: {
    fontFamily: 'fs-SemiBold',
    paddingTop: 22,
    height: 74,
    fontSize: 24,
    color: 'black',
    marginLeft: '10%',
  }
});
