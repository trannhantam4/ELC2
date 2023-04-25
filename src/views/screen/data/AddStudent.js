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

export default function AddStudentScreen() {
  const [classes, setClass] = useState("");
  const [students, setStudents] = useState("");

  function create() {
    addDoc(collection(db, "students"), {
      classes: classes,
      students: students,
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
      <Text>Firebase CRUD</Text>
      <TextInput
        value={classes}
        onChangeText={(classes) => setClass(classes)}
        placeholder="class"
      ></TextInput>
      <TextInput
        value={students}
        onChangeText={(students) => setStudents(students)}
        placeholder="name"
      ></TextInput>
      <TouchableOpacity onPress={create}>
        <Text>Add</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
