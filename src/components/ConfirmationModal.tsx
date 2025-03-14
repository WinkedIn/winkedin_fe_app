import React from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import AppButton from './AppButton'
import config from '../config'
import { useModal } from '../context/ModalContext'
interface ConfirmationModalProps {
  visible: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirnationModal = ({ 
  title, 
  message, 
  onConfirm,
}: ConfirmationModalProps) => {
 const { isModalVisible, showModal, hideModal } = useModal();
  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="fade"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <TouchableOpacity onPress={hideModal} style={{width: "100%", alignItems: "flex-end"}}>
                <Icon name="close" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <AppButton
                text="Edit"
                buttonStyle={{backgroundColor: config.colors.white}}
                textStyle={{color: config.colors.pinkColor}}
                onPress={hideModal}
            />
            <AppButton
                text="Confirm"
                buttonStyle={{backgroundColor: config.colors.pinkColor, paddingHorizontal: 40}}
                onPress={onConfirm}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 25,
    width: '100%',
    maxWidth: 400,
    height: "40%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: config.colors.black,
    marginBottom: 16
  },
  message: {
    fontSize: 16,
    color: config.colors.black,
    marginBottom: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ConfirnationModal