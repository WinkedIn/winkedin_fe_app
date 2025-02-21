import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';

const Habit: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [drinkOption, setDrinkOption] = useState<string | null>(null);
  const [smokeOption, setSmokeOption] = useState<string | null>(null);

  const habits = [
    {
      question: "Raise a Glass or Stay Dry?",
      emoji: "🍾",
      options: ["Occasionally", "Social drinker", "Regularly", "Sober"],
    },
    {
      question: "Light Up or Stay Clean?",
      emoji: "🖬",
      options: ["Occasionally", "Social smoker", "Regularly", "Never"],
    },
  ];

  const drinkOptions = ['Occasionally', 'Social drinker', 'Regularly', 'Sober'];
  const smokeOptions = ['Occasionally', 'Social smoker', 'Regularly', 'Never'];

  const components: JSX.Element[] = [
    <View key="1" style={styles.habitContainer}>
      <Text style={styles.title}>Raise a Glass or Stay Dry?</Text>
      <View style={styles.optionsContainer}>
        {drinkOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              drinkOption === option && styles.selectedOption,
            ]}
            onPress={() => setDrinkOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Light Up or Stay Clean?</Text>
      <View style={styles.optionsContainer}>
        {smokeOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              smokeOption === option && styles.selectedOption,
            ]}
            onPress={() => setSmokeOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>,
  ];

  const progressIncrement: number = 90 / components.length;

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: config.colors.white,
      }}>
        <View style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 40,
            marginTop: 20,
            alignItems: "center",
            width: "100%"
        }}>
          <ProgressBar progress={20 + currentIndex * progressIncrement} />
          <ScrollView style={{flex:1,width:'90%'}} showsVerticalScrollIndicator={false}> 
            {components[currentIndex]}
          </ScrollView>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <TouchableOpacity style={{justifyContent:'center',left:30}}>
          <Text style={{fontSize:16,color:colors.pinkColor}}>
            Skip
          </Text>
        </TouchableOpacity>
        <AppButton
          text="Next"
          buttonStyle={{ marginVertical: 20, paddingHorizontal: 70 }}
          onPress={handleNext}
        />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  habitContainer: {

    // flex: 1,
    // backgroundColor:'red',
    flexDirection: "column",
    // marginTop: 20,
    // alignItems: "center",
    // width: '100%',
    // paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 10,
    alignSelf: "center",
  },
  optionsContainer: {
    width: '100%', // Ensure full width
    marginTop: 20,
  },
  optionButton: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#F8F8F8', // Light background
    width: '100%', // Stretch fully
    alignItems: 'center',
    justifyContent: 'center', // Center text
  },
  selectedOption: {
    backgroundColor: '#F2E6F7', // Light purple background
    borderWidth: 2, // Add border
    borderColor: '#A855F7', // Purple outline
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: '#000', // Make text bold for selected option
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
  },
});


export default Habit;