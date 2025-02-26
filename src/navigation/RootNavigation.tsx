import * as React from 'react';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from '../config';

import {navigationRef} from '../components/NavigationRef';
import HomeScreen from '../screens/home/HomeScreen';
import Splash from '../screens/splash/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import Welcome from '../screens/onboarding/Welcome';
import Register from '../screens/onboarding/Register';
import OtpVerification from '../screens/onboarding/OtpVerification';
import ProfessionalInfo from '../screens/onboarding/ProfessionalInfo';
import Habit from '../screens/onboarding/Habit';
import AddPrompt from '../screens/onboarding/AddPrompt';
import PhotoVerify from '../screens/onboarding/PhotoVerify';
const Stack = createNativeStackNavigator();

const RootNavigation : React.FC = ()  => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {Platform.OS == 'android' ? (
          <Stack.Screen name="PushController" component={PushController} />
        ) : (
          <Stack.Screen
            name="PushControllerIos"
            component={PushControllerIos}
          />
        )}
    
        <Stack.Screen name={config.routes.ONBOARDING} component={Onboarding} /> */}
        <Stack.Screen name={config.routes.SPLASH} component={Splash} />
        <Stack.Screen name={config.routes.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={config.routes.WELCOME} component={Welcome} />
        <Stack.Screen name={config.routes.REGISTER} component={Register} />
        <Stack.Screen
          name={config.routes.OTP_VERIFICATION}
          component={OtpVerification}
        />
        <Stack.Screen name={config.routes.PROFESSIONAL_INFO} component={ProfessionalInfo} />
        <Stack.Screen name={config.routes.HOME_SCREEN} component={HomeScreen} />
        
        <Stack.Screen name={config.routes.HABIT} component={Habit} />
        <Stack.Screen name={config.routes.Add_Prompt} component={AddPrompt} />
        <Stack.Screen name={config.routes.Photo_Verify} component={PhotoVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
