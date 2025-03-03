import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import ImageList from '../../config/ImageList';
import { icons } from '../../assets/icons';

const FaceVerification = ({ setCapturedImage, setCurrentIndex }:any) => {
  const [capturedImage, setCaptureImage] = useState(null);

  // Function to request camera permissions
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS does not require explicit permission request
  };

  // Open Camera Function
  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      console.log('Camera permission denied');
      return;
    }

    const options = {
      mediaType: 'photo',
      cameraType: 'front', // Use the front camera
      quality: 1, // High-quality image
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setCapturedImage(response.assets[0].uri);
        setCurrentIndex(10);
        
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Face Verification</Text>
      <Text style={{ fontSize: 16, fontWeight: '400', color: '#303D47', marginTop: 7 }}>
        Make the same pose {'\n'}Look into camera and hold still.
      </Text>

      <View style={{ padding: 15 }}>
        <Image source={ImageList.faceverifyImage} style={{ height: 150, width: 130, alignSelf: 'center' }} />
      </View>

      {/* Camera Box */}
      <TouchableOpacity onPress={openCamera} style={{
        height: 400,
        width: 350,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {capturedImage ? (
          <Image source={{ uri: capturedImage }} style={{ height: '100%', width: '100%', borderRadius: 24 }} />
        ) : (
          <Image source={icons.icnCamera} style={{ height: 50, width: 50 }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FaceVerification;
