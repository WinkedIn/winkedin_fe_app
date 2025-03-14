import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles'
import InputComponent from '../InputComponent'

const MatchDetails = () => {
  return (
    <>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Set Your Heart's Compass! 💘</Text>
        </View>
        
    </>
  )
}

export default MatchDetails;
