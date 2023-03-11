import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../consts/styles";
import COLORS from "../../consts/colors";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const [searchData_otherScreen, setsearchData_otherScreen] = useState("");

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={backgroundStyles.background}>
        <Text style={textStyles.headerText}>Home</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
export default HomeScreen;
