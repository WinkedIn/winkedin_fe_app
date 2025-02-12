import React, { forwardRef } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  TextInputProps,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import config from '../config';

type AppTextInputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  inputTextLabel?: string;
  showVerticalLine?: boolean;
  viewStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: ImageStyle;
  rightIconViewStyle?: ViewStyle;
  rightIconPress?: () => void;
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: ImageStyle;
  leftIconPress?: () => void;
  onRefs?: (ref: TextInput | null) => void;
  inputLabelmarginHorizontal?: number;
  labelStyle?: TextStyle;
  inputTextLabelVisible?: boolean;
};

const AppTextInput = forwardRef<TextInput, AppTextInputProps>((
  {
    containerStyle,
    inputTextLabel,
    showVerticalLine,
    viewStyle,
    textInputStyle,
    onChangeText,
    editable = true,
    value,
    textAlignVertical,
    autoCapitalize = 'none',
    rightIcon,
    rightIconStyle,
    rightIconViewStyle,
    rightIconPress,
    leftIcon,
    leftIconStyle,
    leftIconPress,
    onRefs,
    secureTextEntry,
    placeholder,
    keyboardType,
    inputLabelmarginHorizontal,
    multiline = false,
    numberOfLines,
    labelStyle,
    maxLength,
    inputTextLabelVisible = true,
    onSubmitEditing,
    ...props
  },
  ref
) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {inputTextLabelVisible && (
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.labelText,
              { textAlign: 'left', marginHorizontal: inputLabelmarginHorizontal },
              labelStyle,
            ]}>
            {inputTextLabel}
          </Text>
        </View>
      )}
      <View style={[styles.contentView, viewStyle]}>
        {leftIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={leftIconPress}
            style={{
              borderLeftColor: '#D6D6D6',
              borderLeftWidth: showVerticalLine ? 1 : 0,
            }}>
            <Image source={leftIcon} style={[styles.leftIconImage, leftIconStyle]} />
          </TouchableOpacity>
        )}
        <TextInput
          {...props}
          ref={(inputRef) => {
            if (onRefs) onRefs(inputRef);
            if (ref && typeof ref === 'function') ref(inputRef);
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, textInputStyle]}
          pointerEvents={!editable ? 'none' : 'auto'}
          autoCorrect={false}
          placeholderTextColor={config.colors.placeHolderColor}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          textAlignVertical={textAlignVertical}
          editable={editable}
          value={value}
          maxLength={maxLength}
          returnKeyType={'done'}
          onSubmitEditing={onSubmitEditing}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={rightIconPress}
            style={[
              rightIconViewStyle,
              {
                borderLeftColor: '#D6D6D6',
                borderLeftWidth: showVerticalLine ? 1 : 0,
              },
            ]}>
            <Image source={rightIcon} style={[styles.rightIconImage, rightIconStyle]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {},
  contentView: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: config.colors.lightGreyColor,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: config.colors.black,
    lineHeight: 21,
    fontFamily: config.fonts.LibreFranklinRegularFont,
  },
  labelContainer: {
    marginBottom: 5,
  },
  labelText: {
    fontFamily: config.fonts.PrimaryFont,
    color: config.colors.labelColor,
    fontSize: 14,
  },
  rightIconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
  leftIconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
});

export default AppTextInput;
