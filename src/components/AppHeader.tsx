import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import config from '../config';

type AppHeaderProps = {
  title: string;
  navigation: any;
  leftImg?: ImageSourcePropType;
  rightimg?: ImageSourcePropType;
  rightImageStyle?: object;
  leftImageEnabled?: boolean;
  onRightPress?: () => void;
  onPress?: () => void;
  tintColor?: string;
  color?: string;
  backgroundColor?: string;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  navigation,
  leftImg,
  rightimg,
  rightImageStyle,
  leftImageEnabled = true,
  onRightPress,
  onPress,
  tintColor,
  color,
  backgroundColor
}) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || config.colors.white }]}>      
      {leftImageEnabled && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => (onPress ? onPress() : navigation.goBack())}
        >
          <Image
            source={leftImg || config.ImageList.BackArrowIcon}
            style={[styles.backimgStyle, { tintColor: tintColor || undefined }]}
          />
        </TouchableOpacity>
      )}

      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={[styles.textStyle, { color: color || config.colors.black }]}>
          {title}
        </Text>
      </View>

      {rightimg && (
        <TouchableOpacity activeOpacity={0.6} onPress={onRightPress}>
          <Image source={rightimg} style={[styles.rightimgStyle, rightImageStyle]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    height: 55,
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: config.fonts.HeadingFont,
    color: config.colors.black,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  backimgStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightimgStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
