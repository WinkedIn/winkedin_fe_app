import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'

interface CompanyCheckBoxProps {
    companyName: string;
    selectedCompanies: string[];
    handleCheckboxClick: (companyName: string) => void;
}

const CompanyCheckBox = ({companyName, selectedCompanies, handleCheckboxClick}: CompanyCheckBoxProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <Checkbox status={selectedCompanies.includes(companyName) ? "checked" : "unchecked"} onPress={() => handleCheckboxClick(companyName)} />
        <Text style={{ marginLeft: 10 }}>{companyName}</Text>
    </View>
  )
}

export default CompanyCheckBox