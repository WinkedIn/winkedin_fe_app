import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import config from '../../config';
import { goToTopNavigation } from '../../components/NavigationRef';
import AppImage from '../../components/AppImage';

type SplashProps = {
  navigation: any;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    const res = await AsyncStorage.getItem(config.AsyncKeys.USER_LOGGED_IN);
    const result = res ? JSON.parse(res) : false;
    console.log('result', result);
    setTimeout(() => {
      if (result) {
        goToTopNavigation(config.routes.HOME_SCREEN);
      } else {
        navigation.replace(config.routes.ONBOARDING);
      }
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.bgImg}>
      <StatusBar barStyle="dark-content" backgroundColor={config.colors.white} />
      <View style={styles.container}>
        <AppImage imageSource={config.ImageList.appLogo} imageStyle={{ width: 273, height: 50 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
