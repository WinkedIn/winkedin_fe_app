import { StyleSheet } from 'react-native';
import config from '../config';

export const InputComponentStyles = StyleSheet.create({
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
  input: {
    backgroundColor: "#303D471A",
    borderRadius: 50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 14,
  },
});

export const DropdownStyles = StyleSheet.create({
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
  arrowIcon: {},
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
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  dropdownItem: {
    backgroundColor: "white",
    padding: 10,
  },
});
