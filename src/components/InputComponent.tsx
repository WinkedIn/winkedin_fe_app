import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Dropdown from './Dropdown';
import * as CommonStyles from "../styles/CommonStyles";


type InputComponentProps = {
  title: string;
  subtitle: string;
  placeholder?: string;
  type: 'dropdown' | 'text';
  options?: string[];
};

const InputComponent: React.FC<InputComponentProps> = ({ title, subtitle, placeholder, type, options }) => {
  const onSelect = (option: string) => {
    console.log(option);
  };

  return (
    <View style={CommonStyles.InputComponentStyles.inputContainer}>
      <View>
        <Text style={CommonStyles.InputComponentStyles.inputTitle}>{title}</Text>
        <Text style={CommonStyles.InputComponentStyles.inputSubtitle}>{subtitle}</Text>
      </View>
      {type === 'dropdown' ? (
        <Dropdown options={options || []} onSelect={onSelect} />
      ) : (
        <TextInput placeholder={placeholder} style={CommonStyles.InputComponentStyles.input} />
      )}
    </View>
  );
};

export default InputComponent;
