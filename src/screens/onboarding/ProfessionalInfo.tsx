import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/AppButton';
import ProfesstionalLifeInfo from '../../components/ProfessionalInfo/ProfesstionalLifeInfo';
import CompanyInputs from '../../components/ProfessionalInfo/CompanyInputs';
import { PersonalDetails } from '../../components/ProfessionalInfo/PersonalDetails';
import { useModal } from '../../context/ModalContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import MatchDetails  from '../../components/ProfessionalInfo/MatchDetails';
import PassionDetails from '../../components/ProfessionalInfo/PassionDetails';
import CharacterDetails from '../../components/ProfessionalInfo/CharacterDetails';

const ProfessionalInfo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const components: JSX.Element[] = [
    <ProfesstionalLifeInfo key="0" />, 
    <CompanyInputs key="1" />,
    <PersonalDetails key="2" />,
    <MatchDetails key="3" />,
    <PassionDetails key="4" isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>,
    <CharacterDetails key="5" isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>,
  ];
  const progressIncrement: number = 90 / components.length;

  const { isModalVisible, showModal, hideModal } = useModal();

  const handleNext = (): void => {
    if (currentIndex === 2) {
      showModal();
    } else if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
 
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: config.colors.white,
      }}>
        {isModalVisible && (
          <ConfirmationModal 
            visible={isModalVisible}
            title="Please Confirm"
            message="You won't be able to edit this information in the future. Do you confirm this information?"
            onConfirm={() => {
              setCurrentIndex((prevIndex) => prevIndex + 1); 
              hideModal();
            }}
            onCancel={hideModal}
          />
        )}
        <View style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 40,
            marginTop: 20,
            // alignItems: "center",
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
          disabled={isDisabled}
        />
    </SafeAreaView>
  );
};

export default ProfessionalInfo;
