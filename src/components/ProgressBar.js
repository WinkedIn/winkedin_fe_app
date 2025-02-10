import React from 'react';
import { View } from 'react-native';
import config from '../config';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <View
      style={{
        height: 10,
        width: "90%",
        borderRadius: 10,
        backgroundColor: config.colors.ProgressBarBg,
      }}
    >
      <View
        style={{
          height: 10,
          width: `${progress}%`,
          borderRadius: 10,
          backgroundColor: config.colors.pinkColor,
        }}
      />
    </View>
  );
};

export default ProgressBar;
