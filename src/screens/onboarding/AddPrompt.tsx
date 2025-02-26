import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import PromptModal from '../../components/PromptModal';

const AddPrompt: React.FC = ({navigation}:any) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [drinkOption, setDrinkOption] = useState<string | null>(null);
    const [smokeOption, setSmokeOption] = useState<string | null>(null);

    const prompts = [
        { emoji: "\uD83C\uDF04", text: "My perfect first date is..." },
        { emoji: "\uD83E\uDDD9", text: "Together we could..." },
        { emoji: "\u2728", text: "My dream is to..." },
        { emoji: "\u270B", text: "Instead of drinks, let's..." },
        { emoji: "\uD83D\uDE07", text: "I am happiest when..." },
        { emoji: "➕", text: "Add your own" },
    ];

    const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

    const [modalVisible, setModalVisible] = useState(false);

    const components: JSX.Element[] = [
        <View key="1" style={styles.habitContainer}>
            <Text style={styles.title}>Add a Prompt</Text>
            <Text style={styles.txtSubTitle}>Add a fun or meaningful prompt to connect with like-minded people!</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {prompts.map((prompt, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.promptButton,
                            selectedPrompt === prompt.text && styles.selectedPrompt,
                        ]}
                        onPress={() => openModal(prompt.text)}
                    >
                        <Text style={styles.promptText}>{prompt.emoji} {prompt.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>,
    ];

    const progressIncrement: number = 90 / components.length;

    const handleNext = () => {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const openModal = (prompt: string) => {
        setSelectedPrompt(prompt);
        setModalVisible(true);
    };

    return (
       <>
            <View style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 40,
                alignItems: "center",
                width: "100%"
            }}>
                {/* <ProgressBar progress={20 + currentIndex * progressIncrement} /> */}
                <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
                    {components[currentIndex]}
                </ScrollView>
            </View>

            {/* <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <AppButton
                    text="Next"
                    buttonStyle={styles.nextButton}
                    onPress={() => navigation.replace(config.routes.Photo_Verify)}
                />
            </View> */}

            <PromptModal
                visible={modalVisible}
                promptTitle={selectedPrompt}
                onClose={() => setModalVisible(false)}
            />
</>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    txtSubTitle: {
        fontSize: 12,
        marginTop:10,
        marginBottom:10,
        color: '#303D47'
    },
    scrollView: {
        width: '100%',
    },
    promptButton: {
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedPrompt: {
        borderColor: '#A855F7',
        backgroundColor: '#F2E6F7',
    },
    promptText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 30,
        marginBottom: 20,
    },
    skipText: {
        fontSize: 16,
        paddingHorizontal: 30,
        color: colors.pinkColor,
    },
    nextButton: {
        paddingHorizontal: 70,
    },
});


export default AddPrompt;