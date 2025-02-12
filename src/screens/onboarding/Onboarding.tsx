import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import config from '../../config';
import AppButton from '../../components/AppButton';
import AppImage from '../../components/AppImage';

interface Slide {
  key: string;
  component: JSX.Element;
}

interface OnboardingProps {
  navigation: any;
}

const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  const slider = useRef<AppIntroSlider<Slide> | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slides: Slide[] = [
    {
      key: 's1',
      component: (
        <View style={styles.slideContent}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={{ height: 32, width: 180 }}
          />
          <Text style={styles.titleText}>{`It's about finding that perfect match who's not on your Slack, but on your wavelength!`}</Text>
          <Text style={styles.descriptionText}>{`Algorithm to matches not only personal but professional interests.`}</Text>
          <AppImage
            imageSource={config.ImageList.onboarding1Image}
            imageStyle={styles.imageStyle}
          />
        </View>
      ),
    },
    {
      key: 's2',
      component: (
        <View style={styles.slideContent}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={{ height: 32, width: 180 }}
          />
          <Text style={styles.titleText}>{`Goodbye to endless swipes and questionable profiles!`}</Text>
          <Text style={styles.descriptionText}>{`Connect with verified professionals who are ready to mingle.`}</Text>
          <AppImage
            imageSource={config.ImageList.onboarding2Image}
            imageStyle={styles.imageStyle}
          />
        </View>
      ),
    },
  ];

  const RenderItem = ({ item }: { item: Slide }) => (
    <View style={styles.slideCss}>
      <StatusBar barStyle="dark-content" backgroundColor={config.colors.white} />
      {item.component}
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {currentSlideIndex < slides.length - 1 ? (
        <View style={styles.buttonContainer}>
          <AppButton
            text="Skip"
            buttonStyle={styles.skipButton}
            textStyle={styles.skipText}
            onPress={() => slider.current?.goToSlide(currentSlideIndex + 1, true)}
          />
          <AppButton
            text="Next"
            buttonStyle={styles.nextButton}
            onPress={() => slider.current?.goToSlide(currentSlideIndex + 1, true)}
          />
        </View>
      ) : (
        <AppButton text="Next" onPress={() => navigation.navigate(config.routes.WELCOME)} />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppIntroSlider
        ref={slider}
        keyExtractor={(item) => item.key}
        onSlideChange={(index) => setCurrentSlideIndex(index)}
        renderPagination={renderPagination}
        data={slides}
        renderItem={RenderItem}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 10,
    backgroundColor: '#fff',
  },
  slideCss: {
    flex: 1,
    backgroundColor: config.colors.white,
  },
  slideContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: config.colors.black,
    fontSize: 24,
    fontFamily: config.fonts.LibreFranklinBold,
    lineHeight: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  descriptionText: {
    color: config.colors.black,
    fontSize: 16,
    fontFamily: config.fonts.LibreFranklinRegularFont,
    lineHeight: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  imageStyle: {
    height: 280,
    width: 280,
    marginTop: 40,
    alignSelf: 'center',
  },
  paginationContainer: {
    backgroundColor: config.colors.white,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    width: '48%',
    backgroundColor: config.colors.white,
  },
  nextButton: {
    width: '48%',
  },
  skipText: {
    color: config.colors.pinkColor,
    alignSelf: 'flex-start',
  },
});
