import React, { useEffect, useState } from 'react'
import { View, Text, Keyboard } from 'react-native'
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles'
import { Button, Searchbar } from 'react-native-paper';
import CompanyInputsStyles from '../../styles/CompanyInputStyles';
import config from '../../config';
import { ChipListItem, ChipListSelectedItem } from './ChipListItem';
import Icon from 'react-native-vector-icons/AntDesign'
import SearchList from './SearchList';

const interests = [
    {id: '1', emoji: '💪', name: 'Ambitious', selected: false},
    {id: '2', emoji: '💖', name: 'Caring', selected: false},
    {id: '3', emoji: '🎨', name: 'Creative', selected: false},
    {id: '4', emoji: '🧐', name: 'Curious', selected: false},
    {id: '5', emoji: '🔥', name: 'Dedicated', selected: false},
    {id: '6', emoji: '💪', name: 'Determined', selected: false},
  ];

  interface Interest {
    id: string;
    emoji: string;
    name: string;
    selected: boolean;
  }

const CharacterDetails = ({isDisabled, setIsDisabled}: {isDisabled: boolean, setIsDisabled: (isDisabled: boolean) => void}) => {
    const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);
    const [unselectedInterests, setUnselectedInterests] = useState<Interest[]>(interests);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        if (selectedInterests.length >= 5) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [selectedInterests]);

    const handleSelect = (interest: Interest) => {
        setSelectedInterests([...selectedInterests, interest])
        setUnselectedInterests(unselectedInterests.filter(item => 
          item.name !== interest.name
        ))
      }
    
      const handleRemove = (interest: Interest) => {
        setUnselectedInterests([...unselectedInterests, interest])
        setSelectedInterests(selectedInterests.filter(item => 
          item.name !== interest.name
        ))
      }

      const handleOutsideClick = () => {
        setIsFocused(false);
        Keyboard.dismiss();
      };

      const handleSearchChange = (query: string) => {
        setSearchQuery(query);
      };

      const filteredList = interests.filter(interest =>
        interest.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const handleCheckboxClick = (interest: Interest) => {
        setSelectedInterests(prev => 
          prev.find(item => item.id === interest.id) 
            ? prev.filter(item => item.id !== interest.id) 
            : [...prev, interest]
        );
      };
  
  return (
    <>
        <View style={ProfessionalInfoStyles.ProfessionalContainer}>
            <Text style={ProfessionalInfoStyles.ProfessionalTitle}>What Sparks Your Passion? 😉</Text>
            <Text style={ProfessionalInfoStyles.ProfessionalSubtitle}>Tell us what makes your heart race. Pick your favorite <Text style={{fontWeight: 'bold'}}>5 interests</Text> , hobbies, activities, and more! </Text>
        </View>
        <View style={ProfessionalInfoStyles.ProfessionalInputContainer}>
            <Searchbar placeholder="Search" style={CompanyInputsStyles.SearchBar} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={searchQuery} onChangeText={handleSearchChange} />
                {isFocused && (
                <SearchList selectedItems={selectedInterests.map(interest => interest.name)} handleCheckboxClick={(itemName: string) => {
                  const interest = filteredList.find(i => i.name === itemName);
                  if (interest) handleCheckboxClick(interest);
                }} List={filteredList.map(interest => ({
                  name: interest.name, 
                  selected: selectedInterests.some(i => i.id === interest.id)
                }))} />
                )}

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, width:'100%', flexWrap:'wrap'}}>
               {selectedInterests.map((interest) => (
                <ChipListSelectedItem key={interest.id} emoji={interest.emoji} name={interest.name} onRemove={() => handleRemove(interest)} />
               ))}
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, width:'100%', flexWrap:'wrap'}}>
                    {unselectedInterests.map((interest,index) => (
                        <ChipListItem key={index + interest.id} emoji={interest.emoji} name={interest.name} onSelect={() => handleSelect(interest)} />
                    ))}
            </View>
        </View>
    </>
  )
}

export default CharacterDetails;
