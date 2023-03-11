import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
  viewStyle,
} from "../../consts/styles";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
function SearchAddUpdateScreen({ route, navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignContent: "flex-end",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: height * 0.02,
        }}
      >
        <TextInput style={textStyles.textInput}></TextInput>
        <TouchableOpacity style={buttonStyles.searchButton}>
          <MaterialCommunityIcons
            name="magnify"
            size={height * 0.04}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignContent: "flex-end",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: height * 0.02,
        }}
      >
        <TouchableOpacity style={buttonStyles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles.button}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
export default SearchAddUpdateScreen;
