import React, { useEffect, useState } from 'react'
import { View, Text, Keyboard } from 'react-native'
import ProfessionalInfoStyles from '../../styles/ProfesstionalInfoStyles'
import { Searchbar } from 'react-native-paper';
import CompanyInputsStyles from '../../styles/CompanyInputStyles';
import { ChipListItem, ChipListSelectedItem } from './ChipListItem';
import SearchList from './SearchList';

const interests = [
    { id: '1', emoji: '🎨', name: 'Art', selected: false },
    { id: '2', emoji: '🎮', name: 'Gaming', selected: false },
    { id: '3', emoji: '📚', name: 'Reading', selected: false },
    { id: '4', emoji: '🎵', name: 'Music', selected: false },
    { id: '5', emoji: '⚽', name: 'Sports', selected: false },
    { id: '6', emoji: '✈️', name: 'Travel', selected: false },
    { id: '7', emoji: '🍳', name: 'Cooking', selected: false },
    { id: '8', emoji: '📸', name: 'Photography', selected: false },
    { id: '9', emoji: '🎬', name: 'Movies', selected: false },
    { id: '10', emoji: '🏃', name: 'Fitness', selected: false },
  ];

  interface Interest {
    id: string;
    emoji: string;
    name: string;
    selected: boolean;
  }

const PassionDetails = ({isDisabled, setIsDisabled}: {isDisabled: boolean, setIsDisabled: (isDisabled: boolean) => void}) => {
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

export default PassionDetails;
