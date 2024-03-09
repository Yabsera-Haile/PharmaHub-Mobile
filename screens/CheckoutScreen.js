import { View, Text, TouchableOpacity,Image,Linking } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { emptyCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function CheckOutScreen() {
  const params = {
    map: {
      latitude: 9.0205,
      longitude: 38.7469,
    },
    name: "Beyene Solomon",
    phone: "+251 911 11 11 11",
  }
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View className="flex-1">
      <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow z-50"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      <MapView
        initialRegion={{
          latitude: params.map.latitude,
          longitude: params.map.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: params.map.latitude,
            longitude: params.map.longitude,
          }}
          title={params.name}
        />
      </MapView>
      <View className="flex-row justify-between px-5 pt-10 mb-1">
        <View>
          <Text className="text-lg text-gray-700 font-semibold">
            Estimated Arrival
          </Text>
          <Text className="text-3xl font-extrabold text-gray-700">20 - 25 Minutes Estimated</Text>
          <Text className="tu-2 text-gray-700 font-semibold">Distance: 4.5 km</Text>
        </View>
      </View>
      <View
        style={{backgroundColor:themeColors.bgColor(0.8)}}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
      >
        <View className="p-1 rounded-full"
            style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
            <Image className="w-16 h-16  rounded-full" source={require("../assets/Images/driver.jpeg")} />

      </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">{params.name} </Text>
            <Text className="font-semibold text-white">Delivery</Text>
          </View>

          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full" onPress={()=>{Linking.openURL(`tel:${params.phone}`);}}>
                <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)} height="20" width="20"/>
            </TouchableOpacity>
            <TouchableOpacity 
                className="bg-white p-2 rounded-full"
                onPress={() => 
                    {
                    navigation.navigate("Home")
                    dispatch(emptyCart())
                    
                    }}
                >
                <Icon.X fill={themeColors.bgColor(1)} strokeWidth={4} stroke="red" height="20" width="20"/>
            </TouchableOpacity>
          </View>

      </View>
    </View>
  );
}