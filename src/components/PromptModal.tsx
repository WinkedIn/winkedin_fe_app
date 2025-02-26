import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface PromptModalProps {
    visible: boolean;
    promptTitle: string;
    onClose: () => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ visible, promptTitle, onClose }) => {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            swipeDirection="down"
            onSwipeComplete={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <View style={styles.header}>
                    <Text style={styles.promptTitle}>{promptTitle}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>✖</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Type your response..."
                    multiline
                    numberOfLines={3}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 500,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    promptTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:5
    },
    closeButton: {
        fontSize: 18,
        color: '#333',
    },
    input: {
        backgroundColor: '#303D4708', 
        borderRadius: 16, 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        fontSize: 16, 
        color: '#303D47',
        minHeight: 100, 
        marginTop:5,
        textAlignVertical: 'top', 
    },
});

export default PromptModal;
