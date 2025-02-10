import { StyleSheet } from 'react-native';
import config from '../config';

const InputComponentStyles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: config.colors.black,
        lineHeight: 16,
    },
    inputSubtitle: {
        fontSize: 12,
        color: config.colors.black,
        fontStyle: "italic",
        lineHeight: 16,
    },
    input:{
        backgroundColor: "#303D471A", 
        borderRadius: 50, 
        paddingLeft: 16, 
        paddingRight: 16, 
        paddingTop: 14, 
        paddingBottom: 14
    }
})

const DropdownStyles = StyleSheet.create({
    dropdown: {
        backgroundColor: "#303D471A", 
        borderRadius: 50, 
        paddingLeft: 16, 
        paddingRight: 16, 
        paddingTop: 14, 
        paddingBottom: 14,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dropdownButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    arrowIcon: {
    },
    dropdownMenu: {
        zIndex: 1000,
        padding: 10,
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#EBEBEB",
        boxShadow: "1px 1px 3.5px 0px rgba(0,0,0,0.25)",
    },
    dropdownItem: {
        backgroundColor: "white",
        padding: 10,
        hover: {
           opacity: 0.3,
        },
    }
})

export default { InputComponentStyles, DropdownStyles };