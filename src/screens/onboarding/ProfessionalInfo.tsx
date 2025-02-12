import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/AppButton';
import ProfesstionalLifeInfo from '../../components/ProfessionalInfo/ProfesstionalLifeInfo';
import CompanyInputs from '../../components/ProfessionalInfo/CompanyInputs';

const ProfessionalInfo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const components: JSX.Element[] = [
    <ProfesstionalLifeInfo key="0" />, 
    <CompanyInputs key="1" />
  ];
  const progressIncrement: number = 90 / components.length;

  const handleNext = (): void => {
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
          <ScrollView style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, paddingBottom: 20, paddingHorizontal: 20 }}>
            {components[currentIndex]}
          </ScrollView>
             
        </View>
        <AppButton
          text={`Next`}
          buttonStyle={{ marginVertical: 20, paddingHorizontal: 20 }}
          onPress={handleNext}
        />
    </SafeAreaView>
  );
};

export default ProfessionalInfo;
