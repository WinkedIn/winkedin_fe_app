import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import config from '../config';
import { UIReducer } from '../redux/reducers';

/**
 * This component is for custom loader. Whenever loading state changes in redux,
 * it will show/hide the loader.
 */
const Apploader: React.FC = () => {
  const isLoading = useSelector(UIReducer.selectLoader);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      spinLoader();
    }
  }, [isLoading]);

  const spinLoader = () => {
    spinValue.setValue(0);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1100,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.mainBackViewStyle}>
      <View style={styles.loaderStyle}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Image
            style={styles.imageStyle}
            source={config.ImageList.loadingIcon}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    backgroundColor: config.colors.aliceBlueColor,
    maxWidth: '80%',
    zIndex: 5,
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: config.colors.skyColor,
  },
});

export default Apploader;
