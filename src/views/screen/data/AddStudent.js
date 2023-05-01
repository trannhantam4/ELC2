import React, { useEffect, Component } from "react";
import { useState } from "react/cjs/react.development";
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
import SelectDropdown from "react-native-select-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../../consts/colors";
import { db } from "../../../../config/firebase";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../../consts/styles";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const dateList = ["2-4-6", "3-5-6", "t7-cn"];
const timeList = [
  "17h30-19h30",
  "19h40-21h10",
  "t7/14h-16h_cn/9h-11h",
  "t7/14h-16h_cn/14h-16h",
];
export default function AddStudentScreen() {
  const [classes, setClass] = useState("");
  const [students, setStudents] = useState("");
  const [tuition, setTuition] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  function create() {
    addDoc(collection(db, "students"), {
      classes: classes,
      students: students,
      tuition: tuition,
      phone: phone,
      date: date,
      time: time,
    })
      .then(() => {
        console.log("created");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height * 0.2}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TextInput
        style={textStyles.addTextInput}
        value={students}
        onChangeText={(students) => setStudents(students)}
        placeholder="name"
      ></TextInput>
      <TextInput
        style={textStyles.addTextInput}
        value={classes}
        onChangeText={(classes) => setClass(classes)}
        placeholder="class"
      ></TextInput>
      <TextInput
        style={textStyles.addTextInput}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        placeholder="phone number"
      ></TextInput>
      <TextInput
        style={textStyles.addTextInput}
        value={tuition}
        onChangeText={(tuition) => setTuition(tuition)}
        placeholder="tuition"
      ></TextInput>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Date: </Text>
        <SelectDropdown
          data={dateList}
          defaultValue={"2-4-6"}
          onSelect={(selectedItem) => {
            setDate(selectedItem);
          }}
          style={{ width: width * 0.2 }}
        ></SelectDropdown>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> Time: </Text>
        <SelectDropdown
          data={timeList}
          onSelect={(selectedItem) => {
            setTime(selectedItem);
          }}
          defaultValue={"17h30-19h30"}
          style={{ width: width * 0.3 }}
        ></SelectDropdown>
      </View>
      <TouchableOpacity
        style={[buttonStyles.buttonAccept, { marginTop: height * 0.02 }]}
        onPress={create}
      >
        <Text style={textStyles.textAccept}>Add</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
