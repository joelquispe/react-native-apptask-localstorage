import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { setData } from "../helpers/async.storage";

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function register() {
    setData("user",{email:email,password:password})
  }
  return (
    <View className="flex flex-1 justify-center items-center  ">
      <Text className="text-3xl font-bold">Hello Again!</Text>
      <Text className="mt-5 text-xl w-60 text-center">
        Register with your information of account!
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
        className="my-5 p-4 bg-white w-80  rounded-lg"
        onChangeText={(el) => {
          setPassword(el);
        }}
      ></TextInput>
      <Text className="mb-12 text-right w-80 text-gray-400 font-bold">
        Recovery Password
      </Text>
      <TouchableOpacity onPress={()=>{
        console.log("joel")
          register()
      }} className="mb-20 flex rounded-lg  p-4 w-80 bg-orange-600 justify-center">
        <Text className="text-center text-white text-lg font-bold">
          Sign in
        </Text>
      </TouchableOpacity>
      <View className="flex flex-row w-70">
        <Text>Are you already registered? </Text>
        <Text
          className="text-blue-600"
          onPress={() => {
          
            navigation.navigate("Login");
          }}
        >
          Log in now
        </Text>
      </View>
    </View>
  );
};

export default Register;
