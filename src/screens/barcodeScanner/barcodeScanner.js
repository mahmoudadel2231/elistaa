/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import BarcodeScanner from 'react-native-barcodescanner';
import {replace} from '../../navigation/NavigationService';
import {RNCamera} from 'react-native-camera';

export const BarcodeScannerScreen = () => {
  const [torchMode] = useState('off');
  const [cameraType] = useState('back');
  const onBarCodeRead = ({data}) => {
    console.log('fefefe', data);
    replace('barcodeWebView', data);
  };
  let camera;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <BarcodeScanner
        onBarCodeRead={barcodeReceived}
        style={{flex: 1}}
        torchMode={torchMode}
        cameraType={cameraType}
      /> */}
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={onBarCodeRead}
          barCodeTypes={[RNCamera.Constants.BarCodeType.upc_e]}
          // onGoogleVisionBarcodesDetected={({barcodes}) => {
          //   console.log('fefefefefef', barcodes[0].data);
          // }}

          // onGoogleVisionBarcodesDetected={onBarCodeRead}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            // onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
