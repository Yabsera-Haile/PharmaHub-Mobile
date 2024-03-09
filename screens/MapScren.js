import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";

export default function MapScren() {
  const {params} = useRoute();
  const navigation = useNavigation();
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
          description={params.description}
        />
      </MapView>
      <View className="flex-row justify-between px-5 pt-10 mb-5">
        <View>
          <Text className="text-lg text-gray-700 font-semibold">
            Estimated Arrival
          </Text>
          <Text className="text-3xl font-extrabold text-gray-700">10 - 15 Minutes Estimated</Text>
          <Text className="tu-2 text-gray-700 font-semibold">Distance: 2.5 km</Text>
        </View>
      </View>
    </View>
  );
}
