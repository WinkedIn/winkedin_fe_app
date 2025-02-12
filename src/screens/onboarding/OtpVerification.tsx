import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import AppImage from '../../components/AppImage';
import config from '../../config';
import AppButton from '../../components/AppButton';

interface OtpVerificationProps {
  navigation: any;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ navigation }) => {
  const otpInput = useRef<OTPTextInput>(null);
  const [otpValue, setOtpValue] = useState<string>('');
  const [secs, setSecs] = useState<number>(30);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecs((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, [secs]);

  const onResendPress = () => {
    setSecs(30);
    setOtpValue('');
    otpInput.current?.clear();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <AppImage imageSource={config.ImageList.appLogo} imageStyle={styles.logo} />
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.subtitle}>
            Enter the verification code that was sent to your company email
            <Text style={styles.boldText}> {'john.doe@company.com.'}</Text>
          </Text>
        </View>

        <View style={styles.otpContainer}>
          <OTPTextInput
            ref={otpInput}
            autoFocus
            inputCount={6}
            defaultValue={otpValue}
            handleTextChange={setOtpValue}
            tintColor={config.colors.black}
            textInputStyle={styles.otpInput}
            containerStyle={styles.containerStyle}
          />
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.normalText}>Didn't receive the code?</Text>
          <Text
            onPress={secs === 0 ? onResendPress : undefined}
            style={[styles.resendText, secs === 0 && styles.activeResend]}
          >
            Resend
          </Text>
          {secs > 0 && (
            <Text style={styles.normalText}>
              {' in 00:'}
              {secs < 10 ? `0${secs}` : secs}
            </Text>
          )}
        </View>

        <View style={styles.separator} />

        <View style={styles.resendContainer}>
          <Text style={styles.normalText}>Trouble verifying email?</Text>
          <Text style={styles.activeResend}>Verify I-card</Text>
        </View>
      </ScrollView>
      <AppButton text="Verify" buttonStyle={styles.verifyButton} onPress={() => navigation.navigate(config.routes.PROFESSIONAL_INFO)} />
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: config.colors.white,
  },
  headerContainer: {
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
  boldText: {
    fontFamily: config.fonts.LibreFranklinSemiBold,
  },
  otpContainer: {
    marginVertical: 20,
  },
  otpInput: {
    backgroundColor: config.colors.lightGreyColor,
    height: 48,
    fontSize: 14,
    color: config.colors.black,
    width: '14%',
    borderWidth: 1,
    borderBottomWidth: 0.9,
    borderRadius: 30,
    borderColor: config.colors.lightGreyColor,
    fontFamily: config.fonts.LibreFranklinRegularFont,
  },
  containerStyle: {
    height: 55,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  normalText: {
    fontFamily: config.fonts.LibreFranklinRegularFont,
    fontSize: 16,
    color: config.colors.black,
    lineHeight: 21,
  },
  resendText: {
    fontFamily: config.fonts.LibreFranklinRegularFont,
    fontSize: 16,
    color: config.colors.black,
    lineHeight: 21,
    marginLeft: 5,
  },
  activeResend: {
    fontFamily: config.fonts.LibreFranklinBold,
    color: config.colors.pinkColor,
  },
  separator: {
    height: 1,
    backgroundColor: config.colors.borderColor,
    marginVertical: 5,
  },
  verifyButton: {
    marginVertical: 20,
  },
});
