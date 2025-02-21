import { StyleSheet } from "react-native";
import config from "../config";

const CompanyInputsStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    SearchBarContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1,
    },
    SearchBar: {
      backgroundColor: "white",
      borderColor: config.colors.borderPrimaryColor,
      borderWidth: 1,
    },
    CompanyListContainer: {
      flex: 1,
    },
    CompanyListContainerContent: {
      flex: 1,
      gap: 10,
    },
    AddCompanyButton: {
      borderRadius: 24,
      marginLeft: -20,
    },
    AddCompanyButtonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  
  export default CompanyInputsStyles;