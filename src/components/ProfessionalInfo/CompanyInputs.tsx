import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import config from '../../config';
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles';
import { Button, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CompanyListItem} from './CompanyListItem';

const CompanyInputs : React.FC = () => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  return (
    <>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Which companies would you like to keep your profile away from?  🤫</Text>
            <Text style={ProfessionalInfoStyles.ProfessionalSubtitle}>Your privacy matters—share the names and stay incognito!</Text>
        </View>

        <View style={{display: "flex", flexDirection: "column", gap: 10, flex: 1}}>
            <Searchbar placeholder="Search" style={{ backgroundColor: "white", borderColor: isFocused ? config.colors.purpleColor : config.colors.borderPrimaryColor, borderWidth: 1 }} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={''}/>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1, gap: 15}}>
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
              <CompanyListItem companyName="Google" />
            </ScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20}}>
                <Button style={{borderRadius: 24 , marginLeft: -20}} labelStyle={{fontSize: 16, fontWeight: "bold"}} icon={config.ImageList.purpleAddIcon} textColor={config.colors.purpleColor}>Add Company </Button>
            </View>
        </View>
    </>
  )
}

export default CompanyInputs