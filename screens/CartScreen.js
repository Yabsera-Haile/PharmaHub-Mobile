import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Touchable,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../themes";
import { pharmacy } from "../data/tempDate";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsById,
  selectCartTotal,
} from "../slices/cartSlice";
import { removeFromCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function CartScreen() {
  const deliveryFee= 15;
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = React.useState([]);

  useEffect(() => {
    const items = cart.reduce((items, product) => {
      if (items[product.id]) {
        items[product.id].push(product);
      } else {
        items[product.id] = [product];
      }
      return items;
    }, {});
    setGroupedItems(items);
  }, [cart]);

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm z-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-50 rounded-full p-1 shadow top-5 left-4"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl mt-1">Cart</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="h-1"
      ></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        className=" bg-white pt-5 mb-3"
      >
        {Object.entries(groupedItems).map(([key,items], index) => {
          console.log(items);
          let product = items[0];
          return (
            <View
              key={index}
              elevation={3}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl shadow-3xl mb-3 mx-2"
            >
              <Text
                className="font-bold"
                style={{ color: themeColors.bgColor(1) }}
              >
                {items.length} x
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={product.image}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {product.name}
              </Text>
              <Text className="font-semibold text-base">
                ETB {product.price}
              </Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                onPress={() => {
                  dispatch(removeFromCart({ id: product.id }));
                }}
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height="20"
                  width="20"
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">ETB {total}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">ETB {deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Total</Text>
          <Text className="text-gray-700 font-extrabold">ETB {total + deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Order Placed", "Your order has been placed", )
              navigation.navigate("Checkout");
            }}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
