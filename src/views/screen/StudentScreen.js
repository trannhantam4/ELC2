import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../consts/styles";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  getDocs,
  where,
} from "firebase/firestore";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchAddUpdateScreen from "./SearchAddUpdateScreen";
const { width } = Dimensions.get("window");
import firestore from "@react-native-firebase/firestore";
const { height } = Dimensions.get("window");
import { db } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function StudentScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [students, setStudents] = useState(""); // Initial empty array of students
  const [search, setSearch] = useState("");
  function create() {
    getDocs(query(collection(db, "students"), where("students", "==", search)))
      .then((docSnap) => {
        let student = [];
        docSnap.forEach((doc) => {
          student.push({ ...doc.data(), id: doc.id });
        });
        setStudents(student);
        console.log(student);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView
      style={{ justifyContent: "center", alignItems: "center" }}
    >
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
              onChangeText={(search) => {
                setSearch(search);
              }}
            ></TextInput>
            <TouchableOpacity
              onPress={create}
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
                onPress={() => navigation.navigate("AddStudent")}
              >
                <Text style={textStyles.textAccept}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={buttonStyles.buttonDecline}>
                <Text style={textStyles.textDecline}>Update</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={students}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: COLORS.lightGreen,
                    height: height * 0.2,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}
                >
                  <Text>name: {item.name}</Text>
                  <Text>class: {item.classes}</Text>
                  <Text>tuition: {item.tuition}</Text>
                  <Text>date: {item.date}</Text>
                  <Text>time: {item.time}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
