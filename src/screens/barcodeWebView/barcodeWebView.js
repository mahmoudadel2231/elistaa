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
  let webView;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebView
        onLoad={() => {
          setLoading(false);
        }}
        ref={(ref) => {
          webView = ref;
        }}
        onError={() => {
          webView.reload();
        }}
        source={{
          uri: `https://ellistaa.com/en/search?type=products&search=${route.params.barcode}`,
        }}
        style={{width: '100%', height: '100%', flex: 1}}
      />
    </>
  );
};

const styles = StyleSheet.create({});
