import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'

interface CompanyCheckBoxProps {
    itemName: string;
    selectedItems: string[];
    handleCheckboxClick: (itemName: string) => void;
}

const CompanyCheckBox = ({itemName, selectedItems, handleCheckboxClick}: CompanyCheckBoxProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <Checkbox status={selectedItems.includes(itemName) ? "checked" : "unchecked"} onPress={() => handleCheckboxClick(itemName)} />
        <Text style={{ marginLeft: 10 }}>{itemName}</Text>
    </View>
  )
}

export default CompanyCheckBox