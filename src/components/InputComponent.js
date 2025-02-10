import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Dropdown from './Dropdown';
import CommonStyles from '../styles/CommonStyles';

const InputComponent = ({title, subtitle, placeholder, type, options}) => {

  const onSelect = (option) => {
    console.log(option);
  }

  return (
    <View style={CommonStyles.InputComponentStyles.inputContainer}>
        <View>
            <Text style={CommonStyles.InputComponentStyles.inputTitle}>{title}</Text>
            <Text style={CommonStyles.InputComponentStyles.inputSubtitle}>{subtitle}</Text>
        </View>
        {type === 'dropdown' ? <Dropdown options={options} onSelect={onSelect} /> : <TextInput placeholder={placeholder} style={CommonStyles.InputComponentStyles.input}/>}
    </View>
  )
}

export default InputComponent;
