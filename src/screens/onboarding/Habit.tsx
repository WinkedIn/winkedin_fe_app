import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/AppButton';

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
            width: "100%",
        }}>
          <ProgressBar progress={20 + currentIndex * progressIncrement} />
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}> 
            {components[currentIndex]}
          </ScrollView>
        </View>
        <AppButton
          text="Next"
          buttonStyle={{ marginVertical: 20, paddingHorizontal: 20 }}
          onPress={handleNext}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  habitContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  optionButton: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
  },
});

export default Habit;