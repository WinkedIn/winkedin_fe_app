import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import config from '../../config';

export const CompanyListItem = ({companyName, onDelete}: {companyName: string, onDelete: () => void}) => {
  return (
    <View style={{backgroundColor: `${config.colors.purpleColor}0C`, paddingHorizontal: 16, paddingVertical: 14, borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{color: "#303D47", fontSize: 14, fontWeight: "600"}}>{companyName}</Text>
        <Button onPress={onDelete} style={{padding: 0,}} >
            <Icon name="trash" size={15} color={config.colors.redColor} />
        </Button>
    </View>
  )
}