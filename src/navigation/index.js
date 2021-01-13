import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BarcodeScannerScreen, BarCodeWebViewScreen, Home} from '../screens';
import {navigationRef} from './NavigationService';

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="barcode" component={BarcodeScannerScreen} />
        <Stack.Screen name="barcodeWebView" component={BarCodeWebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
