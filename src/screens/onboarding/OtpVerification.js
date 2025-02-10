import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppImage from '../../components/AppImage';
import config from '../../config';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import OTPTextInput from 'react-native-otp-textinput';

const OtpVerification = ({navigation}) => {
  const otpInput = useRef(null);
  const [otpvalue, setValue] = useState('');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState(30);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (secs <= 0) {
        //console.log('end')
      } else setSecs(s => s - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [secs]);

  //function calling
  const onResendPress = async () => {
    setSecs(30);
    setValue('');
    otpInput.current.clear();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: config.colors.white,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View
          style={{
            marginTop: 20,
          }}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={{height: 32, width: 180}}
          />
          <Text
            style={{
              color: config.colors.black,
              fontSize: 24,
              fontFamily: config.fonts.LibreFranklinBold,
              lineHeight: 30,
              marginTop: 20,
            }}>{`Enter verification code`}</Text>
          <Text
            style={{
              color: config.colors.black,
              fontSize: 16,
              fontFamily: config.fonts.LibreFranklinRegularFont,
              lineHeight: 20,
              marginTop: 10,
            }}>
            {`Enter the verification code that was sent to your company email `}
            <Text
              style={{
                color: config.colors.black,
                fontSize: 16,
                fontFamily: config.fonts.LibreFranklinSemiBold,
                lineHeight: 20,
              }}>
              {'john.doe@company.com.'}
            </Text>
          </Text>
        </View>

        <View style={{marginVertical: 20}}>
          <OTPTextInput
            ref={otpInput}
            autoFocus={true}
            inputCount={6}
            defaultValue={otpvalue}
            handleTextChange={value => {
              setValue(value);
            }}
            tintColor={config.colors.black}
            textInputStyle={styles.Otpinput}
            containerStyle={styles.containerStyle}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: config.fonts.LibreFranklinRegularFont,
              fontSize: 16,
              color: config.colors.black,
              lineHeight: 21,
            }}>{`Didn't receive the code?`}</Text>

          <Text
            onPress={() => secs == '00' && onResendPress()}
            style={{
              fontFamily:
                secs == '00'
                  ? config.fonts.LibreFranklinBold
                  : config.fonts.LibreFranklinRegularFont,
              fontSize: 16,
              color:
                secs == '00' ? config.colors.pinkColor : config.colors.black,
              lineHeight: 21,
              marginLeft: 5,
            }}>{`Resend`}</Text>

          {secs > 0 && (
            <Text
              style={{
                fontFamily: config.fonts.LibreFranklinRegularFont,
                fontSize: 16,
                color: config.colors.black,
                lineHeight: 21,
              }}>
              {' in '}
              {mins}:{secs < 10 && 0}
              {secs}
            </Text>
          )}
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: config.colors.borderColor,
            marginVertical: 5,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: config.fonts.LibreFranklinRegularFont,
              fontSize: 16,
              color: config.colors.black,
              lineHeight: 21,
            }}>{`Trouble verifying email?`}</Text>

          <Text
            onPress={() => secs == '00' && onResendPress()}
            style={{
              fontFamily: config.fonts.LibreFranklinBold,

              fontSize: 16,
              color: config.colors.pinkColor,
              marginLeft: 5,
            }}>{`Verify I-card`}</Text>
        </View>
      </ScrollView>
      <AppButton
        text={`Verify`}
        buttonStyle={{marginVertical: 20}}
        onPress={() => navigation.navigate(config.routes.PROFESSIONAL_INFO)}
      />
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  Otpinput: {
    backgroundColor: config.colors.lightGreyColor,
    height: 48,
    fontSize: 14,
    color: config.colors.blackColor,
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
});
