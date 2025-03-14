import React, { useState } from 'react'
import { View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import config from '../../config';
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles';
import { Button, Searchbar } from 'react-native-paper';
import {CompanyListItem} from './CompanyListItem';
import SearchList from './SearchList';
import CompanyInputsStyles from '../../styles/CompanyInputStyles';

const CompanyInputs : React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [companyList, setCompanyList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCheckboxClick = (companyName: string) => {
    setSelectedCompanies(prev => 
      prev.includes(companyName) ? prev.filter(name => name !== companyName) : [...prev, companyName]
    );
  };

  const handleAddCompany = () => {
    setCompanyList(prev => [...prev, ...selectedCompanies.filter(company => !prev.includes(company))]);
  };

  const handleDeleteCompany = (companyName: string) => {
    setCompanyList(prev => prev.filter(name => name !== companyName));
    setSelectedCompanies(prev => prev.filter(name => name !== companyName));
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  
  let companyListData: {name: string, selected: boolean}[] = [
    {
      name: "Google",
      selected: false
    },
    {
      name: "GoLive",
      selected: false
    },
    {
      name: "GoPro",
      selected: false
    }
  ]

  const filteredCompanyList = companyListData.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOutsideClick = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={CompanyInputsStyles.container}>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>Which companies would you like to keep your profile away from?  🤫</Text>
            <Text style={ProfessionalInfoStyles.ProfessionalSubtitle}>Your privacy matters—share the names and stay incognito!</Text>
        </View>

        <View style={CompanyInputsStyles.SearchBarContainer}>
            <Searchbar placeholder="Search" style={CompanyInputsStyles.SearchBar} onFocus={() => setIsFocused(true)} value={searchQuery} onChangeText={handleSearchChange}/>
            {isFocused && (
              <SearchList selectedItems={selectedCompanies} handleCheckboxClick={handleCheckboxClick} List={filteredCompanyList} />
            )}
            <ScrollView style={CompanyInputsStyles.CompanyListContainer} contentContainerStyle={CompanyInputsStyles.CompanyListContainerContent}>
              {companyList.map((company, index) => (
                <CompanyListItem key={index} companyName={company} onDelete={() => handleDeleteCompany(company)} />
              ))}
            </ScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20}}>
                <Button onPress={handleAddCompany} style={CompanyInputsStyles.AddCompanyButton} labelStyle={CompanyInputsStyles.AddCompanyButtonText} icon={config.ImageList.purpleAddIcon} textColor={config.colors.purpleColor}>Add Company </Button>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CompanyInputs

