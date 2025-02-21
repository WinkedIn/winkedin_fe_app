import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Dropdown from './Dropdown';
import * as CommonStyles from "../styles/CommonStyles";
import { DatePickerModal } from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/Ionicons';


type InputComponentProps = {
  title: string;
  subtitle: string;
  placeholder?: string;
  type: 'dropdown' | 'text' | 'calendar';
  options?: string[];
};

const inputTypeComponents = {
  dropdown: (props: any) => <Dropdown options={props.options || []} onSelect={props.onSelect} />,
  text: (props: any) => <TextInput placeholder={props.placeholder} style={CommonStyles.InputComponentStyles.input} />,
  calendar: (props: any) => (
    <DatePickerModal
      mode="single"
      locale="en"
      visible={props.visible}
      onDismiss={props.onDismiss}
      date={props.date}
      onConfirm={props.onConfirm}
    />
  ),
};

const InputComponent: React.FC<InputComponentProps> = ({ title, subtitle, placeholder, type, options }) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);

  const onSelect = (option: string) => {
    console.log(option);
  };

  const onConfirm = (params: any) => {
    setDate(params.date);
    setDatePickerVisible(false);
  };

  const onDismiss = () => {
    setDatePickerVisible(false);
  };

  return (
    <View style={CommonStyles.InputComponentStyles.inputContainer}>
      <View>
        <Text style={CommonStyles.InputComponentStyles.inputTitle}>{title}</Text>
        <Text style={CommonStyles.InputComponentStyles.inputSubtitle}>{subtitle}</Text>
      </View>
      {type === 'calendar' && (
        <View style={{...CommonStyles.InputComponentStyles.input, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text>{date ? date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'DD/MM/YYYY'}</Text>
          <Icon
            name="calendar-clear-outline"
            size={24}
            onPress={() => setDatePickerVisible(true)}
            // style={CommonStyles.InputComponentStyles.input}
          />
        </View>
      )}
      {inputTypeComponents[type]({
        placeholder,
        options,
        onSelect,
        visible: isDatePickerVisible,
        onDismiss,
        date,
        onConfirm,
      })}
    </View>
  );
};

export default InputComponent;
