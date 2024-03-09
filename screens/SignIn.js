import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";

export default function SignIn() {
  const navigate = useNavigation();
  return (
      <SafeAreaView className="flex flex-1 bg-white">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="absolute top-12 left-2 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" size="20" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/Images/LogoPharma.png")}
            style={{ width: 300, height: 80 }}
            className="mx-auto"
          />
        </View>
      </SafeAreaView>
  );
}
