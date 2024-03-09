import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Categories from "../components/categories";
import { useRoute } from "@react-navigation/native";
import { products } from "../data/products";
import ProductRow from "../components/ProductRow";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../components/cartIcon";

export default function SearchFilterScreen() {
  const { params } = useRoute();
  const { search, category } = params;
  const [text, setText] = useState(search || "");
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(category);
  //   console.log(search);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    if (activeCategory) {
      const filteredByCategory = filtered.filter(
        (item) => item.category == activeCategory
      );
      setItems(filteredByCategory);
      return;
    }
    setItems(filtered);
  }, [text, activeCategory]);

  return (
    <SafeAreaView className="bg-white pt-3 flex-1">
      <StatusBar barStyle="light" />
      <CartIcon />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <TouchableOpacity
          className=" bg-gray-50 p-2 rounded-full shadow"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View className="flex-row flex-1 items-center py-2 px-4 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Search"
            className="flex-1 ml-2"
            defaultValue={text}
            onChangeText={(newTxt) => setText(newTxt)}
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">A.A, Bole </Text>
          </View>
        </View>
      </View>
      <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 5,
        }}
        className="overflow-visible"
      >
        <View className="mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            {catagories.map((catagory, index) => {
              let isActive = catagory.name == activeCategory;
              let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
              let textColor = isActive
                ? "font-semibold text-gray-800"
                : "text-gray-500";
              return (
                <View
                  key={index}
                  className="flex justify-center items-center mr-6"
                >
                  <TouchableOpacity
                    onPress={() => setActiveCategory(catagory.name)}
                    className={"rounded-full p-1 bg-gray-200 shadow" + btnClass}
                  >
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={catagory.image}
                      className="object-cover rounded-full"
                    />
                  </TouchableOpacity>
                  <Text className={"text-sm" + textColor}>{catagory.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
      </View>
      <View>
      <ScrollView
        className="mt-5"
        contentContainerStyle={{
          paddingBottom: 200
        }}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <ProductRow key={index} item={item} className="rounded-3xl"/>
        ))}
      </ScrollView>
      </View>

    </SafeAreaView>
  );
}
