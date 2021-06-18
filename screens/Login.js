import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { images, SIZES, COLORS, FONTS } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easily
        </Text>
        {/* Butttons */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* login */}
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkLime, COLORS.lime]}
            buttonContainerStyle={{
              paddingVertical: 15,
              borderRadius: 25,
              borderColor: COLORS.darkLime,
            }}
            onPress={() => navigation.replace("Home")}
          />

          {/* sign Up  */}
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 15,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: COLORS.darkLime,
            }}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header */}
      {renderHeader()}
      {/* Details */}
      {renderDetails()}
    </View>
  );
};

export default Login;
