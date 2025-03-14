import React from 'react'
import { View, ScrollView } from 'react-native'
import CompanyCheckBox from './CompanyCheckBox'
import config from '../../config'

interface SearchListProps {
    selectedItems: string[];
    handleCheckboxClick: (itemName: string) => void;
    List: {name: string, selected: boolean}[];
}

const SearchList = ({selectedItems, handleCheckboxClick, List}: SearchListProps) => {
  return (
    <View style={{display: "flex", flexDirection: "column", backgroundColor:"white", borderWidth: 1, borderColor: config.colors.borderPrimaryColor, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, shadowColor: "#000", shadowOffset: {width: 3, height: 5}, shadowOpacity: 0.25, shadowRadius: 5, elevation: 5}}>
        <ScrollView style={{ display: "flex", flexDirection: "column", gap: 10, marginHorizontal: 10, maxHeight: 150}}>
            {List.map((item, index) => (
                <CompanyCheckBox key={index} itemName={item.name} selectedItems={selectedItems} handleCheckboxClick={handleCheckboxClick} />
            ))}
        </ScrollView>
    </View>
  )
}

export default SearchList