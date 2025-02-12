import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppImage from '../../components/AppImage';
import config from '../../config';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

const Register = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: config.colors.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
          }}>
          <AppImage
            imageSource={config.ImageList.appLogo}
            imageStyle={{ height: 32, width: 180 }}
          />
          <Text
            style={{
              color: config.colors.black,
              fontSize: 24,
              fontFamily: config.fonts.LibreFranklinBold,
              lineHeight: 30,
              marginTop: 20,
            }}>{`Enter your company email`}</Text>
          <Text
            style={{
              color: config.colors.black,
              fontSize: 16,
              fontFamily: config.fonts.LibreFranklinRegularFont,
              lineHeight: 20,
              marginTop: 10,
            }}>{`A verification code will be sent to your company email.`}</Text>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <AppTextInput
            inputTextLabel={''}
            inputTextLabelVisible={false}
            placeholder={`john.doe@company.com`}
            textInputStyle={{ flex: 1 }}
          />
        </View>
      </ScrollView>
      <AppButton
        text={`Continue`}
        buttonStyle={{ marginVertical: 20 }}
        onPress={() => navigation.navigate(config.routes.OTP_VERIFICATION)}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
