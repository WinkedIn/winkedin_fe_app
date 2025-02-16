import React from 'react'
import { View, ScrollView } from 'react-native'
import CompanyCheckBox from './CompanyCheckBox'
import config from '../../config'

interface SearchListProps {
    selectedCompanies: string[];
    handleCheckboxClick: (companyName: string) => void;
    companyList: {name: string, selected: boolean}[];
}

const SearchList = ({selectedCompanies, handleCheckboxClick, companyList}: SearchListProps) => {
  return (
    <View style={{display: "flex", flexDirection: "column", backgroundColor:"white", borderWidth: 1, borderColor: config.colors.borderPrimaryColor, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, shadowColor: "#000", shadowOffset: {width: 3, height: 5}, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5}}>
        <ScrollView style={{ display: "flex", flexDirection: "column", gap: 10, marginHorizontal: 10, maxHeight: 150}}>
            {companyList.map((company, index) => (
                <CompanyCheckBox key={index} companyName={company.name} selectedCompanies={selectedCompanies} handleCheckboxClick={handleCheckboxClick} />
            ))}
        </ScrollView>
    </View>
  )
}

export default SearchList