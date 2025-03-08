import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '../../assets/icons';

const FaceVerificationNext = ({ capturedImage }:any) => {

    useEffect(()=>{
        console.log("route params is:-->>",capturedImage);
    },[])

  return (
    <View style={{flex:1}}>
     <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>Face Verification</Text>
     <View style={{
        height: 400,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop:15
      }}>
        {capturedImage ? (
          <Image source={{ uri: capturedImage }} style={{ height: '100%', width: '100%', borderRadius: 24 }} />
        ) : (
          <Image source={icons.icnCamera} style={{ height: 50, width: 50 }} />
        )}
      </View>
    </View>
  )
}

export default FaceVerificationNext

const styles = StyleSheet.create({})