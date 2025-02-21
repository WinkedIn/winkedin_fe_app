import { StyleSheet } from 'react-native';
import config from '../config';

const ProfessionalInfoStyles = StyleSheet.create({
    ProfessionalContainer: {
        paddingVertical: 10,
    },
    ProfessionalTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: config.colors.black,
        lineHeight: 30,
        marginBottom: 8,
    },
    ProfessionalSubtitle: {
        fontSize: 12,
        color: config.colors.black,
        fontStyle: "italic",
        // lineHeight: 30,
    },
    ProfessionalInputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        marginTop: 24,
    }
})

export default ProfessionalInfoStyles;