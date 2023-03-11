import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  textStyles,
  backgroundStyles,
  viewStyle,
  buttonStyles,
} from "./src/consts/styles";
import ClassScreen from "./src/views/screen/ClassScreen";
import PlacTestScreen from "./src/views/screen/PlacTestScreen";
import SearchAddUpdateScreen from "./src/views/screen/SearchAddUpdateScreen";
import SearchScreen from "./src/views/screen/SearchScreen";
import StudentScreen from "./src/views/screen/StudentScreen";
import AddStudentScreen from "./src/views/screen/data/AddStudent";
import AddPlacementScreen from "./src/views/screen/data/AddPlacementScreen";
import AddClassScreen from "./src/views/screen/data/AddClassScreen";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("Student")}
          >
            <Text>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("Class")}
          >
            <Text>Classes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyles.button}
            onPress={() => navigation.navigate("PlacTest")}
          >
            <Text>Placement</Text>
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
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="PlacTest" component={PlacTestScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
        <Stack.Screen name="AddPlacement" component={AddPlacementScreen} />
        <Stack.Screen name="AddClass" component={AddClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
