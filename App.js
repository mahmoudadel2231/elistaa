/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      SplashScreen.hide();
    }
  }, [loading]);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <WebView
        onLoad={() => {
          setLoading(false);
        }}
        source={{uri: 'https://ellistaa.com/en/home'}}
        style={{width: '100%', height: '100%', flex: 1}}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
