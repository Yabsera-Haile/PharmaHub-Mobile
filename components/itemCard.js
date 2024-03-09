import { View, Text, TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import { useNavigation } from '@react-navigation/native';

export default function ItemCard({item}) {
  
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Pharmacy',{...item})}
    >
        <View 
            style= {{
                shadowColor: themeColors.bgColor(1),
                shadowRadius: 7,
            }}

            className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image source={item.image} className="h-36 w-60 rounded-t-3xl" />
            <View className="px-3 pb-4 space-y-2">
                <Text className="font-bold text-lg">{item.name}</Text>
                <View className="flex-row item-center space-x-1">
                    <Icon.Star height="15" width="15" color="yellow" stroke="yellow" fill="yellow"/>
                    <Text className="text-sx">
                        <Text className="text-green-700">{item.stars+" "}</Text>
                        <Text className="text-gray-700">
                            ({item.reviews} reviews) 
                        </Text>
                    </Text>
                    
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin height="15" width="15" color="gray" />
                    <Text className = "text-gray-700 text-sx">Nearby. {item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}