import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { StackActions } from "@react-navigation/native";
import { getData } from "../helpers/async.storage";
import { Snackbar } from "react-native-paper";

const Login = ({ navigation }) => {
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signIn() {
    const data = JSON.parse(await getData("user"));

    if (email == data.email && password == data.password) {
      navigation.dispatch(StackActions.replace("Home"));
    } else {
      setIsSnackbar(true);
    }
  }
  async function verifyUser() {
    const data = await getData("user");
    if (data != undefined) {
      navigation.dispatch(StackActions.replace("Home"));
    }
  }
  useState(() => {
    verifyUser();
  }, []);
  return (
    <View style={styles.container} className="bg-gray-200 w-100">
      <Text className="text-3xl font-bold">Hello Again!</Text>
      <Text className="mt-5 text-xl w-60 text-center">
        Welcome back you've been missed!
      </Text>
      <TextInput
        placeholder="Email"
        className="mt-10 p-4 bg-white w-80  rounded-lg"
        onChangeText={(el) => {
          setEmail(el);
        }}
      ></TextInput>
      <TextInput
        placeholder="Password"
        className="my-5  p-4 bg-white w-80  rounded-lg"
        onChangeText={(el) => {
          setPassword(el);
        }}
      ></TextInput>
      <Text className="mb-12 text-right w-80 text-gray-400 font-bold">
        Recovery Password
      </Text>
      <TouchableOpacity
        onPress={signIn}
        className="mb-20 flex rounded-lg  p-4 w-80 bg-orange-600 justify-center"
      >
        <Text className="text-center text-white text-lg font-bold">Log in</Text>
      </TouchableOpacity>
      <View className="flex flex-row w-70">
        <Text >Not o member? </Text>
        <Text
          className="text-blue-600"
          onPress={() => {
            // navigation.navigate("Register")
            // navigation.dispatch(StackActions.reset({actions:[navigation.navigate("Register")]}))
            navigation.dispatch(StackActions.replace("Register"));
          }}
        >
          {" "}
          Register now
        </Text>
      </View>
      <Snackbar
        duration={3000}
        onDismiss={() => {
          setIsSnackbar(false);
        }}
        visible={isSnackbar}
      >
        "Usuario invalido"
      </Snackbar>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
