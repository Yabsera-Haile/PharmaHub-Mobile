import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../themes";
import {useNavigation} from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1 bg-white justify-center align-center space-y-8 px-5"
    >
      <View className="flex-1 flex justify-start align-center space-y-8 my-4">
          <Image
            source={require("../assets/Images/LogoPharma.png")}
            style={{ width: 300, height: 80 }}
            className=" mx-auto "
          />
          <View className="flex-col justify-center align-middle items-center">
            <Text className="font-normal text-lg">No Distance is too far for </Text>
            <Text className="text-lg">Health</Text>
            </View>
         </View>
        <View className="space-y-4 flex-1 justify-center">
            <TouchableOpacity
                className="py-3 mx-7 rounded-3xl"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => navigation.navigate("SignUp")}
                >
                    <Text className="text-xl font-bold text-center text-white">
                        Register
                    </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="font-semibold">Already have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        <Text className="font-semibold" style={{color:themeColors.bgColor(1)}}>
                             Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            
      </View>
    </SafeAreaView>
  );
}
