import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import * as Icon from "react-native-feather";
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice';
import {useSelector, useDispatch} from "react-redux";

export default function ProductRow({item}) {
  const dispatch = useDispatch()

  const totalItems = useSelector(state=> selectCartItemsById(state, item.id))

  const handleIncrease = () => {
    dispatch(addToCart(item))

  }
  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}))

  }
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-5xl" style={{height: 100, width: 100}} source={item.image} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-700 text-sm">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">ETB {item.price}</Text>
        <View className="flex-row items-center">
            <TouchableOpacity
                className="p-1 rounded-full"
                onPress={handleDecrease}
                disabled={totalItems.length === 0}
                style={{backgroundColor:themeColors.bgColor(1)}}>
                <Icon.Minus strokeWidth={2} height = "20" width="20" color="white"/>
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
                className="p-1 rounded-full"
                onPress={handleIncrease}
                style={{backgroundColor:themeColors.bgColor(1)}}>
                <Icon.Plus strokeWidth={2} height = "20" width="20" color="white"/>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  )
}