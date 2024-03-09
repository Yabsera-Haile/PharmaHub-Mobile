import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import ProductRow from "../components/ProductRow";
import CartIcon from "../components/cartIcon";

export default function PharmacyScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
    <View>
        <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="h-72 w-full" />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-6 my-1">
              <View className="flex-row item-center space-x-1">
                <Icon.Star
                  height="15"
                  width="15"
                  color="yellow"
                  stroke="yellow"
                />
                <Text className="text-sx">
                  <Text className="text-green-700">{item.stars + " "}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} reviews)
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Map", item)}
              className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" color="gray" />
                <Text className="text-gray-700 text-sx">
                  Nearby. {item.address}
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-500 mt-2 mb-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Products</Text>

          {
            item.products.map((product,index) =>{
              return (
                <ProductRow key={index} item={product} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}
