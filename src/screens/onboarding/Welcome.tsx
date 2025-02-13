import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppImage from '../../components/AppImage';
import config from '../../config';

type WelcomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={styles.logo}
          />
          <Text style={styles.title}>{`Find a love full of purpose and connection!`}</Text>
          <Text style={styles.subtitle}>{
            `Platform for working professionals Verified using their work email LinkedIn as a source of truth`
          }</Text>
        </View>
        <AppImage
          imageSource={config.ImageList.onboarding2Image}
          imageStyle={styles.onboardingImage}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(config.routes.REGISTER)}
          style={styles.linkedinButton}>
          <AppImage
            imageSource={config.ImageList.linkedInLogo}
            imageStyle={styles.linkedinLogo}
          />
          <Text style={styles.linkedinText}>{`Continue with LinkedIn`}</Text>
        </TouchableOpacity>
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>{`By continuing, you agree to the WinkedIn `}</Text>
          <Text style={styles.termsLink}>{`Terms & Conditions.`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  contentContainer: {
    marginTop: 20,
  },
  logo: {
    height: 32,
    width: 180,
  },
  title: {
    color: config.colors.black,
    fontSize: 24,
    fontFamily: config.fonts.LibreFranklinBold,
    lineHeight: 30,
    marginTop: 20,
  },
  subtitle: {
    color: config.colors.black,
    fontSize: 16,
    fontFamily: config.fonts.LibreFranklinRegularFont,
    lineHeight: 20,
    marginTop: 10,
  },
  onboardingImage: {
    height: 280,
    width: 280,
    alignSelf: 'center',
    marginTop: 40,
  },
  footer: {
    marginVertical: 20,
  },
  linkedinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.colors.blueColor,
    borderRadius: 50,
    height: 48,
  },
  linkedinLogo: {
    height: 24,
    width: 24,
  },
  linkedinText: {
    color: config.colors.white,
    fontSize: 16,
    fontFamily: config.fonts.LibreFranklinBold,
    lineHeight: 20,
    marginHorizontal: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  termsText: {
    color: config.colors.black,
    fontSize: 14,
    fontFamily: config.fonts.LibreFranklinRegularFont,
    lineHeight: 21,
  },
  termsLink: {
    color: config.colors.pinkColor,
    fontSize: 14,
    fontFamily: config.fonts.LibreFranklinSemiBold,
    lineHeight: 21,
  },
});
