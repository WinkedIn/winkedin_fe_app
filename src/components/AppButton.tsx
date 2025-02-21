import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextStyle, ViewStyle } from 'react-native';
import config from '../config';

type AppButtonProps = {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({ buttonStyle, textStyle, text, onPress, disabled }) => {
  return (
    <View style={{ paddingHorizontal: 20}}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        onPress={onPress}
        style={[styles.button, buttonStyle, { minWidth: 100, backgroundColor: disabled ? config.colors.disabledColor : (buttonStyle?.backgroundColor || config.colors.pinkColor) }]}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    height: 48,
    backgroundColor: config.colors.pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: config.colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: config.fonts.LibreFranklinBold,
    lineHeight: 24,
  },
});

export default AppButton;
