import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../../consts/styles";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchAddUpdateScreen from "../SearchAddUpdateScreen";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class AddClassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      name: "",
      screen: "",
    };
  }
  searchRev = ({ route, navigation }) => {
    var name = this.state.name;
    if (name.length == 0) {
      alert("require field is missing");
    } else {
      var searchAPIURL = "http://www.filmcamshop.com/api/totalSearch.php";
      var header = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        name: name,
        screen: "students",
      };
      fetch(searchAPIURL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataSource: responseJson.item,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={backgroundStyles.background}>
          <KeyboardAvoidingView>
            <ScrollView>
              <Text>Name: </Text>
              <TextInput style={textStyles.addTextInput}></TextInput>
              <Text>Class: </Text>
              <TextInput style={textStyles.addTextInput}></TextInput>
              <Text>Room: </Text>
              <TextInput style={textStyles.addTextInput}></TextInput>
              <Text>Tuition: </Text>
              <TextInput style={textStyles.addTextInput}></TextInput>
              <Text>Voucher: </Text>
              <TextInput style={textStyles.addTextInput}></TextInput>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <TouchableOpacity style={buttonStyles.button}>
                  <Text>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyles.button}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
