import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';
import config from '../config';

type AppImageProps = {
  imageStyle?: ImageStyle;
  type?: string;
  uri?: string;
  imageSource: any;
};

const AppImage: React.FC<AppImageProps> = ({ imageStyle, uri, imageSource }) => {
  return (
    <Image
      style={[styles.image, imageStyle]}
      source={uri ? { uri: uri } : imageSource}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default AppImage;