import { StyleSheet, Dimensions } from "react-native";
import COLORS from "./colors";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const textStyles = StyleSheet.create({
  headerText: {
    backgroundColor: "#fff",
    padding: height * 0.01,
    width: width,
    height: height * 0.09,
    fontSize: height * 0.05,
    color: COLORS.green,
    fontWeight: "bold",
  },
  textInput: {
    width: width * 0.7,
    height: height * 0.05,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#b8b8b8",
  },
  addTextInput: {
    marginTop: height / 40,
    width: width * 0.8,
    height: height * 0.05,
    borderRadius: 10,
    backgroundColor: "#b8b8b8",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  icon: { height: height * 0.04, width: height * 0.04 },
});
const backgroundStyles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.white,
    width: width,
    height: height,
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.03,
    align: "center",
  },
});
const viewStyle = StyleSheet.create({
  view2: {
    alignContent: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: height * 0.02,
  },
});
const buttonStyles = StyleSheet.create({
  button: {
    borderColor: COLORS.green,
    borderRadius: 15.0,
    borderWidth: 2,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    width: width * 0.25,
    height: height * 0.07,
    alignItems: "center",
    margin: width * 0.03,
    padding: height * 0.01,
  },
  searchButton: {
    height: height * 0.05,
    width: width * 0.1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 1,
  },
});

export { textStyles, buttonStyles, backgroundStyles };
