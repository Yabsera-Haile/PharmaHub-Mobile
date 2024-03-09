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
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  return (
    <View className="bg-white flex-1">
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
            <View className="flex-row justify-between mx-3 align-middle items-end">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <Text className="font-semibold text-lg text-gray-600">
                ETB {item.price}
              </Text>
            </View>
            <View className="flex-row space-x-6 mb-2 mx-3 mt-1">
              <View className="flex-row item-center space-x-1">
                <Icon.Star
                  height="15"
                  width="15"
                  color="yellow"
                  stroke="yellow"
                  fill="yellow"
                />
                <Text className="text-sx">
                  <Text className="text-green-700">{item.stars + " "}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} reviews)
                  </Text>
                </Text>
              </View>
            </View>
              {
                item.frequency &&
                <Text style={{backgroundColor:themeColors.bgColor(1)}} className="text-center text-white mx-3 text-md py-1 px-2 w-20 rounded-lg font-semibold ">
                  {item.frequency}
                </Text>
              }
            <View className="mt-3">
              <Text className="font-semibold text-xl mt-1">Description</Text>
              <Text className="text-gray-500 mt-2 mb-2">
                {item.description}
              </Text>
            </View>
            <View className="mt-3">
              <Text className="font-semibold text-xl mt-1">Side Effects</Text>
              <Text className="text-gray-500 mt-2 mb-2">
                {item.sideEffects}
              </Text>
            </View>
            <View className="mt-3">
              <Text className="font-semibold text-xl mt-1">Dosage</Text>
              <Text className="text-gray-500 mt-2 mb-2">
                {item.dosage}
              </Text>
            </View>
            <View className="mt-3">
              <Text className="font-semibold text-xl mt-1">Expiry Date</Text>
              <Text className="text-gray-500 mt-2 mb-2">
                {item.expiry}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg mb-10"
        onPress={() => {
          dispatch(addToCart(item));
          navigation.navigate("Cart");
        }}
      >
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
