/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../../navigation/NavigationService';

export const BarCodeWebViewScreen = ({route}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      SplashScreen.hide();
    }
  }, [loading]);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Text>{route.params.barcode}</Text>
    </>
  );
};

const styles = StyleSheet.create({});
