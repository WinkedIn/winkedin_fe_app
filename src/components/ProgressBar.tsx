import React from 'react';
import { View } from 'react-native';
import config from '../config';

type ProgressBarProps = {
  progress?: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress = 0 }) => {
  return (
    <View
      style={{
        height: 10,
        width: "90%",
        borderRadius: 10,
        backgroundColor: config.colors.ProgressBarBg,
        marginHorizontal: 20,
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
