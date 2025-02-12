import React from 'react'
import InputComponent from '../InputComponent';
import { View, Text } from 'react-native';
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles';



const ProfesstionalLifeInfo : React.FC = () => {
  return (
    <>
         <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Let&apos;s Talk Professional Life! 🏢</Text>
            <Text style={ProfessionalInfoStyles.ProfessionalSubtitle}>Discover how you can shine on WinkedIn!</Text>
        </View>

        <View style={ProfessionalInfoStyles.ProfessionalInputContainer}>
            <InputComponent title="Name Check! 📝" subtitle="Your name to kick off your WinkedIn journey!" placeholder="John Doe" type="text" />
            <InputComponent title="Who&apos;s lucky enough to have you on their payroll? 🚀" subtitle="Your workplace to help us connect you with the right people!" placeholder="Company" type="text" />
            <InputComponent title="What Do You Call Yourself at Work? 🌟!" subtitle="WinkedIn connect you with others who vibe with you" placeholder="Software Developer" type="dropdown" options={["Software Developer", "Software Engineer", "Product Manager", "Marketing Manager", "HR Manager", "Other"]} />
            <InputComponent title="What&apos;s Your Professional Playground? 🎡" subtitle="Let&apos;s connect you with like-minded pros!" placeholder="IT" type="dropdown" options={["IT", "Finance", "Marketing", "Sales", "HR", "Engineering", "Design", "Product", "Customer Support", "Other"]} />
            <InputComponent title="What’s Your Education Badge? 📜" subtitle="Great minds attract great hearts!" placeholder="Bachelor of Technology" type="dropdown" options={["Bachelor of Technology", "Master of Science", "Doctor of Philosophy", "Other"]} />
        </View>
    </>
  )
}

export default ProfesstionalLifeInfo;
