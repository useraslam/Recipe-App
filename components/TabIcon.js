import React from "react";
import { View, Image } from "react-native";
import { COLORS } from "../constants";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 80,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
    </View>
  );
};

export default TabIcon;
