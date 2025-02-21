import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import config from '../../config'
import Icon from 'react-native-vector-icons/AntDesign'

const ChipListItem = ({emoji, name, onSelect}: {
  emoji: string, 
  name: string,
  onSelect: () => void
}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, paddingVertical:4, paddingHorizontal:8}}>
          <Text style={{fontSize: 12, fontWeight: '500', color: config.colors.black}}>{emoji}</Text>
          <Text style={{fontSize: 12, fontWeight: '500',color: config.colors.black}}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ChipListSelectedItem = ({emoji, name, onRemove}: {
  emoji: string, 
  name: string,
  onRemove: () => void
}) => {
    return (
        <View style={{flexDirection: 'row',alignItems: 'center', gap: 4, paddingVertical:4, paddingHorizontal: 8, backgroundColor: config.colors.lightPink, borderRadius: 50, borderColor: config.colors.pinkColor, borderWidth: 1}}>
            <Text style={{fontSize: 12, fontWeight: '500', color: config.colors.black, backgroundColor: 'white', borderRadius: 50, padding: 2}}>{emoji}</Text>
            <Text style={{fontSize: 12, fontWeight: '500',color: config.colors.black}}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Icon name="close" size={12} color={config.colors.black} />
            </TouchableOpacity>
        </View>
    )
}

export {ChipListItem, ChipListSelectedItem}