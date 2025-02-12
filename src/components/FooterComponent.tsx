import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import config from '../config';

type FooterComponentProps = {
  from: string;
  navigation: any;
  notification_count: number;
};

const FooterComponent: React.FC<FooterComponentProps> = ({ from, navigation, notification_count }) => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: config.colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderTopWidth: 1,
        borderTopColor: config.colors.borderColor,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(config.routes.HOME_SCREEN);
        }}
        style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: from === 'home' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}
          source={config.ImageList.HomeIcon}
        />
        <Text
          style={{
            fontFamily: config.fonts.PrimaryFont,
            fontSize: 12,
            color: from === 'home' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(config.routes.All_CHAT);
        }}
        style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: from === 'chat' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}
          source={config.ImageList.ChatIcon}
        />
        <Text
          style={{
            fontFamily: config.fonts.PrimaryFont,
            fontSize: 12,
            color: from === 'chat' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}>
          Chat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(config.routes.NOTIFICATION);
        }}
        style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: from === 'notification' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}
          source={config.ImageList.BellIcon}
        />
        {notification_count > 0 && (
          <View
            style={{
              height: 14,
              width: 14,
              borderRadius: 7,
              backgroundColor: config.colors.skyColor,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -4,
              right: 18,
            }}>
            <Text
              style={{
                fontFamily: config.fonts.PrimaryFont,
                fontSize: 8,
                color: config.colors.white,
              }}>
              {notification_count}
            </Text>
          </View>
        )}
        <Text
          style={{
            fontFamily: config.fonts.PrimaryFont,
            fontSize: 12,
            color: from === 'notification' ? config.colors.skyColor : config.colors.placeHolderColor,
          }}>
          Notification
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({});
