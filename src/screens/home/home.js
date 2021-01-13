/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../../navigation/NavigationService';

export const Home = () => {
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
        // onError={() => {
        //   webView.reload();
        // }}
        source={{uri: 'https://ellistaa.com/en/home'}}
        style={{width: '100%', height: '100%', flex: 1}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'center',
          bottom: 0,
          flex: 1,
        }}
        onPress={() => {
          navigate('barcode');
        }}>
        <MaterialCommunityIcons
          name="barcode-scan"
          color={'black'}
          size={35}
          style={{width: 40, height: 40, marginBottom: 15}}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});
