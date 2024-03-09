import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { topSelling, pharmacy, subscriptions } from "../data/tempDate";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../components/cartIcon";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleChange = (newTxt) => {
    
    if (newTxt.length > search.length){
      setSearch(newTxt);
      navigation.navigate("SearchFilter", { search: newTxt });
    }
    setSearch(newTxt);
  };
  return (
    <SafeAreaView className="bg-white pt-3">
      <StatusBar barStyle="light" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center py-2 px-4 rounded-full border border-gray-300">    
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Search"
            className="flex-1 ml-2 border-gray-500"
            name="search"
            defaultValue={search}
            onChangeText={(newTxt)=>handleChange(newTxt)}
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">A.A, Bole </Text>
          </View>
        </View>
        <View
          className="p-3 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}>
          <Icon.ShoppingCart
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        className="overflow-visible"
      >
        <Categories />
      </ScrollView>
      <ScrollView
        className="mt-5"
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={false}
      >
        <FeaturedRow
          title={pharmacy.title}
          items={pharmacy.items}
          description={pharmacy.description}
        />
        <FeaturedRow
          title={topSelling.title}
          items={topSelling.items}
          description={topSelling.description}
        />
        <FeaturedRow
          title={subscriptions.title}
          items={subscriptions.items}
          description={subscriptions.description}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
