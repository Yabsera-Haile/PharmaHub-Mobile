import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React,{useState} from "react";
import catagories from "../data/catagories";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigation();

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {catagories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass= isActive? 'bg-gray-600' : 'bg-gray-200'
          let textColor= isActive? 'font-semibold text-gray-800' : 'text-gray-500'
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity 
              onPress={() =>{
                setActiveCategory(category.id)
                navigate.navigate("SearchFilter", { category: category.name })
              }
              }
              className={"rounded-full p-1 bg-gray-200 shadow"+btnClass} >

                <Image style={{ width: 45, height: 45 }} source={category.image} className="object-cover rounded-full" />
              </TouchableOpacity>
                <Text className={"text-sm"+textColor}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
