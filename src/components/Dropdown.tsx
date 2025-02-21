import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import config from '../config';
import * as CommonStyles from "../styles/CommonStyles"; 


type DropdownProps = {
    options: string[];
    onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>('Select an option');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <>
            <View style={CommonStyles.DropdownStyles.dropdown}>
                <TouchableOpacity style={CommonStyles.DropdownStyles.dropdownButton} onPress={handleToggle}>
                    <Text>{selectedOption}</Text>
                    <Image 
                        source={config.ImageList.arrowIcon} 
                        style={[CommonStyles.DropdownStyles.arrowIcon, { transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }]} 
                    />
                </TouchableOpacity>
            </View>
            {isOpen && (
                <ScrollView style={CommonStyles.DropdownStyles.dropdownMenu}>
                    {options.map((option, index) => (
                        <TouchableOpacity  key={index} onPress={() => handleSelect(option)} style={CommonStyles.DropdownStyles.dropdownItem}>
                            <Text style={{color: config.colors.black}} >{option}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </>
    );
};

export default Dropdown;
