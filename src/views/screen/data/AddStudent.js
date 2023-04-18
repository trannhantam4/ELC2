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
import { useHeaderHeight } from "@react-navigation/elements";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class AddStudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      classes: "",
      room: "",
      tuition: "",
      address: "",
      note: "",
    };
  }
  searchRev = ({ route, navigation }) => {
    var name = this.state.name;
    var phone = this.state.phone;
    var email = this.state.email;
    var classes = this.state.classes;
    var room = this.state.room;
    var tuition = this.state.tuition;
    var address = this.state.address;
    var note = this.state.note;
    if (
      name.length == 0 ||
      phone.length == 0 ||
      classes.length == 0 ||
      room.length == 0 ||
      tuition.length == 0
    ) {
      alert("require field is missing");
    } else {
      var searchAPIURL = "http://www.filmcamshop.com/api/AddStudent.php";
      var header = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        name: name,
        phone: phone,
        email: email,
        classes: classes,
        room: room,
        tuition: tuition,
        address: address,
        note: note,
      };
      fetch(searchAPIURL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "ok") {
            alert("student added!");
          } else if (responseJson == "can't") {
            alert("error!");
          } else {
            alert("failed!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={height * 0.2}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={backgroundStyles.background}>
            <ScrollView style={{ paddingBottom: 200 }}>
              <Text>Name: </Text>
              <TextInput
                style={textStyles.addTextInput}
                onChangeText={(name) => this.setState({ name })}
              ></TextInput>
              <Text>Phone: </Text>
              <TextInput
                style={textStyles.addTextInput}
                keyboardType={"numeric"}
                onChangeText={(phone) => this.setState({ phone })}
              ></TextInput>
              <Text>Email: </Text>
              <TextInput
                style={textStyles.addTextInput}
                defaultValue={"N/A"}
                keyboardType="email-address"
                onChangeText={(email) => this.setState({ email })}
              ></TextInput>
              <Text>Address: </Text>
              <TextInput
                style={textStyles.addTextInput}
                defaultValue={"N/A"}
                onChangeText={(address) => this.setState({ address })}
              ></TextInput>
              <Text>Class: </Text>
              <TextInput
                style={textStyles.addTextInput}
                onChangeText={(classes) => this.setState({ classes })}
              ></TextInput>
              <Text>Room: </Text>
              <TextInput
                style={textStyles.addTextInput}
                keyboardType={"numeric"}
                onChangeText={(room) => this.setState({ room })}
              ></TextInput>
              <Text>Tuition: </Text>
              <TextInput
                style={textStyles.addTextInput}
                keyboardType={"numeric"}
                onChangeText={(tuition) => this.setState({ tuition })}
              ></TextInput>
              <Text>Note: </Text>
              <TextInput
                style={textStyles.addTextInput}
                defaultValue={"N/A"}
                onChangeText={(note) => this.setState({ note })}
              ></TextInput>
              <View
                style={{
                  width: width,
                  flexDirection: "row",
                  alignSelf: "center",
                  paddingTop: height * 0.02,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  style={buttonStyles.buttonAccept}
                  onPress={this.searchRev}
                >
                  <Text>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyles.buttonDecline}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
