import React from 'react';
import { StatusBar,SafeAreaView, View} from 'react-native';
import {useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta/componentes';
import mock from './src/mocks/cesta'

export default function App() {

  const [fontcarregada] = useFonts({
    "MontSerratRegular":Montserrat_400Regular,
    "MontSerratBold":Montserrat_700Bold,
  })

  if(!fontcarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="auto" />
      <Cesta {...mock}/>
    </SafeAreaView> 
  );
}

