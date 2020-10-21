import { StyleSheet } from "react-native";
const Global = {
  mainColor: "#000259",
  secondaryColor: "#fdea0a",
  content: "#333",
  mainFont: "Montserrat-Regular",
  bold: "Montserrat-Bold",
};
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  heading: {
    marginVertical: 30,
    fontSize: 23,
    fontFamily: Global.bold,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontFamily: Global.mainFont,
  },
  row: {
    marginVertical: 10,
  },
  rowcheckbox: {
    marginVertical: 10,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 20,
  },
  button: {
    backgroundColor: Global.mainColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    fontFamily: Global.mainFont,
  },
});
