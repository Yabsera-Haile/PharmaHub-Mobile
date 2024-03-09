import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../themes";
import ItemCard from "./itemCard";
import ProductCard from "./productCard";

export default function FeaturedRow({ title, description, items }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text stye={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {items?.map((item, index) => {
            
          return title == "Pharmacy" ?<ItemCard item={item} key={index}/> : <ProductCard item={item} key={index}/>;
        })}
      </ScrollView>
    </View>
  );
}
