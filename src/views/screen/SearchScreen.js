import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../consts/styles";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
function SearchScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={backgroundStyles.background}>
        <Text style={textStyles.headerText}>Search</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity style={buttonStyles.button}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyles.button}>
            <Text style={{}}>Update</Text>
          </TouchableOpacity>
        </View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.white,
    width: width,
    height: height * 0.9,
  },
  header: {
    backgroundColor: "#fff",
    padding: height * 0.01,
    width: width,
    height: height * 0.09,
    fontSize: height * 0.05,
  },
});
export default SearchScreen;
