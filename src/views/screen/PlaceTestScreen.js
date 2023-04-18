import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../consts/styles";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchAddUpdateScreen from "./SearchAddUpdateScreen";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class PlaceTestScreen extends Component {
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
        screen: "placement",
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
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: height * 0.04,
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
              <TextInput
                style={textStyles.textInput}
                onChangeText={(name) => this.setState({ name })}
              ></TextInput>
              <TouchableOpacity
                onPress={this.searchRev}
                style={buttonStyles.searchButton}
              >
                <MaterialCommunityIcons
                  name="magnify"
                  size={height * 0.04}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignContent: "flex-end",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: height * 0.02,
              }}
            >
              <View
                style={{
                  alignContent: "flex-end",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingBottom: height * 0.02,
                }}
              >
                <TouchableOpacity
                  style={buttonStyles.buttonAccept}
                  onPress={() => this.props.navigation.navigate("AddPlacement")}
                >
                  <Text>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyles.buttonDecline}>
                  <Text>Update</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                style={{
                  marginTop: height * 0.03,
                  marginBottom: height * 0.01,
                }}
                data={this.state.dataSource}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      width: width * 0.9,
                      alignSelf: "center",
                      backgroundColor: COLORS.light,
                      marginBottom: height * 0.01,
                      borderRadius: 20,
                      padding: 10,
                    }}
                    onPress={() => {}}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      {item.name}
                    </Text>

                    <Text>Phone: {item.phone}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Address: {item.address}</Text>
                    <Text>Type: {item.type}</Text>
                    <Text>Date: {item.date}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
          <Text></Text>
        </View>
      </View>
    );
  }
}
