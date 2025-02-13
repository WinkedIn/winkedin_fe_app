import { View, Text } from 'react-native';
import React from 'react';
import Splash from '../screens/splash/Splash';

type PushControllerProps = {
  [key: string]: any;
};

const PushController: React.FC<PushControllerProps> = (props) => {
  return <Splash {...props} />;
};

export default PushController;
