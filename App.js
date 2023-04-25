import * as React from "react";
import {
  Button,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  textStyles,
  backgroundStyles,
  viewStyle,
  buttonStyles,
} from "./src/consts/styles";
import COLORS from "./src/consts/colors";
import { useRoute } from "@react-navigation/native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import ClassScreen from "./src/views/screen/ClassScreen";
import PlaceTestScreen from "./src/views/screen/PlaceTestScreen";
import SearchAddUpdateScreen from "./src/views/screen/SearchAddUpdateScreen";
import SearchScreen from "./src/views/screen/SearchScreen";
import StudentScreen from "./src/views/screen/StudentScreen";
import AddStudentScreen from "./src/views/screen/data/AddStudent";
import AddPlacementScreen from "./src/views/screen/data/AddPlacementScreen";
import AddClassScreen from "./src/views/screen/data/AddClassScreen";
import "expo-dev-client";
import {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { HeaderShownContext } from "@react-navigation/elements";
import TutorScreen from "./src/views/screen/TutorScreen";
import LoginScreen from "./src/views/screen/LoginScreen";
import { firebase } from "@react-native-firebase/auth";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
function HomeScreen({ navigation }) {
  const user = firebase.auth().currentUser;

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: COLORS.strongGreen,
          height: "10%",
          width: width,
          opacity: 0.6,
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: height * 0.06,
              height: height * 0.06,
              margin: 20,
            }}
            source={{ uri: user.photoURL }}
          ></Image>
          <Text style={{ fontWeight: "bold" }}>{user.displayName}</Text>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={signOut}
        >
          <AntDesign
            style={{ marginRight: width * 0.03 }}
            name="login"
            size={height * 0.05}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: height * 0.29, width: width }}>
        <Image
          style={{ height: height * 0.29, width: width }}
          source={require("./src/img/person.jpg")}
        ></Image>
      </View>
      <View style={{ flexDirection: "column" }}>
        {/* <Add /> */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("Student")}
          >
            <Ionicons name="person" size={height * 0.03} color={COLORS.green} />
            <Text
              style={{
                color: COLORS.green,
                paddingHorizontal: 5,
                fontWeight: "bold",
                fontSize: height * 0.025,
              }}
            >
              Student
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("Class")}
          >
            <FontAwesome5
              name="door-closed"
              size={height * 0.03}
              color={COLORS.green}
            />
            <Text
              style={{
                color: COLORS.green,
                paddingHorizontal: 5,
                fontWeight: "bold",
                fontSize: height * 0.025,
              }}
            >
              Classes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("PlaceTest")}
          >
            <FontAwesome
              name="file-o"
              size={height * 0.03}
              color={COLORS.green}
            />
            <Text
              style={{
                color: COLORS.green,
                paddingHorizontal: 5,
                fontWeight: "bold",
                fontSize: height * 0.025,
              }}
              numberOfLines={1}
            >
              Placement
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("Tutor")}
          >
            <FontAwesome
              name="file-o"
              size={height * 0.03}
              color={COLORS.green}
            />
            <Text
              style={{
                color: COLORS.green,
                paddingHorizontal: 5,
                fontWeight: "bold",
                fontSize: height * 0.025,
              }}
              numberOfLines={1}
            >
              Tutor
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="PlaceTest" component={PlaceTestScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
        <Stack.Screen name="AddPlacement" component={AddPlacementScreen} />
        <Stack.Screen name="AddClass" component={AddClassScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Tutor" component={TutorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
