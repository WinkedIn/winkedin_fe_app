import React from 'react'
import { View, Text } from 'react-native';
import config from '../../config';
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles';
import { Button, Searchbar } from 'react-native-paper';


const CompanyInputs : React.FC = () => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  return (
    <>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Which companies would you like to keep your profile away from?  🤫</Text>
            <Text style={ProfessionalInfoStyles.ProfessionalSubtitle}>Your privacy matters—share the names and stay incognito!</Text>
        </View>

        <View style={{display: "flex", flexDirection: "column", gap: 10}}>
            <Searchbar placeholder="Search" style={{backgroundColor: "white", borderColor: isFocused ? config.colors.purpleColor : config.colors.borderPrimaryColor, borderWidth: 1, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: isFocused ? 0.5 : 0, shadowRadius: 3.84, elevation: isFocused ? 5 : 0}} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20}}>
                <Button style={{color: config.colors.purpleColor, borderRadius: 24, fontSize: 16, fontWeight: "bold", marginLeft: -20}} size="large" icon={config.ImageList.purpleAddIcon}>Add Company </Button>
            </View>
        </View>
    </>
  )
}

export default CompanyInputs