import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImageList from '../../config/ImageList';
import config from '../../config';

const SuccessScreen: React.FC = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>Your account has been created.</Text>
        </View>
  
        <View style={styles.imageContainer}>
          <Image source={ImageList.success} style={styles.image} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#303D47',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30
    },
    image: {
      height: 500,
      width: '100%',
      resizeMode: 'contain',
    },
  });
  
  export default SuccessScreen;
