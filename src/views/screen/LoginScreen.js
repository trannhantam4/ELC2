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
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import {
  buttonStyles,
  textStyles,
  backgroundStyles,
} from "../../consts/styles";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

function LoginScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState("");
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  const combined = async () => {
    onGoogleButtonPress;
    goBack;
  };
  const goBack = async () => {
    navigation.navigate("Home", {
      user: user.displayName,
      photo: user.photoURL,
    });
  };
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
        goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GoogleSignin.configure({
    webClientId:
      "827355421235-bq9ll778ugbsqenp43tivufpd0b0ud3h.apps.googleusercontent.com",
  });

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: COLORS.whiteGreen,
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GoogleSigninButton
        style={{ width: width * 0.8, height: height * 0.08 }}
        onPress={() => {
          onGoogleButtonPress();
        }}
      />
      <Button title="Sign Out" onPress={signOut}></Button>
    </View>
  );
}

export default LoginScreen;
