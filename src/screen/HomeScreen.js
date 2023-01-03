import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../../assets";
import * as Animatable from "react-native-animatable";

export default function HomeScreen() {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width ;
  const height = Dimensions.get("window").height ;
  

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 justify-center items-center rounded-full bg-black">
          <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-2xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00DCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum
          possimus{" "}
        </Text>
      </View>

      {/* Circle Section */}
      <View className={`w-[90%] h-[45%] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36`}></View>
      <View className="w-[90%] h-[45%] bg-[#E99265] rounded-full absolute -bottom-28 -left-28"></View>

      {/* Image Container */}
      <View className=" items-center justify-center relative flex-1">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className={`w-5/6 h-5/6 object-contain -bottom-20`}
        />

        <TouchableOpacity 
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
