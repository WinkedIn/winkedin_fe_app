import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles'
import InputComponent from '../InputComponent'

export const PersonalDetails = () => {
  return (
    <>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Add personal details</Text>
        </View>
        <View style={ProfessionalInfoStyles.ProfessionalInputContainer}>
            <InputComponent title="Lets celebrate your 🎂" subtitle="Your profile does not display your birthdate, only your age" placeholder="John Doe" type="calendar" />
            <InputComponent title="Be true to yourself 🌟" subtitle="Choose the gender that best describes you!" placeholder="Gender" type="dropdown" options={["Male", "Female", "Other"]} />
            <InputComponent title="Height matters! 📏" subtitle="We’re curious—how tall are you?" placeholder="185 cm" type="dropdown" options={["150 cm", "160 cm", "170 cm", "180 cm", "190 cm", "200 cm"]} />
            <InputComponent title="Drop your email! ✉️" subtitle="We’ll use this email to verify your account" placeholder="Company" type="text" />
        </View>
    </>
  )
}
