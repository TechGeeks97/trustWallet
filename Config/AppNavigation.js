//                                                                      Basic Imports
import React from "react";
import Colors from "../Styles/Colors";

import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//                                                                      Stack Navigation
import LegalStatus from "../Components/Splash/LegalStatus";
import PrivacyPolicies from "../Components/Splash/PrivacyPolicies";
import TermsOfServices from "../Components/Splash/TermsOfServices";
import SignUp from "../Components/Splash/SignUp";
import Login from "../Components/Splash/Login";
import BackUpWallet from "../Components/Splash/BackUpWallet";
import SecretPhrase from "../Components/Splash/SecretPhrase";
import VerifySecretPhrase from "../Components/Splash/VerifySecretPhrase";
import Buy from "../Components/MainSubScreens/Buy";
import Swap from "../Components/MainSubScreens/Swap";
import ReEnter from "../Components/Splash/ReEnter";
import ReLogin from "../Components/Splash/ReLogin";
import Send from "../Components/MainSubScreens/Send";
import Receive from "../Components/MainSubScreens/Receive";
import Notifications from "../Components/Main/Notifications";
import NotificationOne from "../Components/Main/NotificationOne";
import RefreshNotifications from "../Components/Main/RefreshNotifications";
import ReceiveTestCoin from "../Components/MoreScreens/ReceiveTestCoin";
import ReceiveTestCoinTwo from "../Components/MoreScreens/ReceiveTestCoinTwo";
import AddCustomToken from "../Components/MoreScreens/SendTokens/AddCustomToken";
import Transfer from "../Components/MoreScreens/SendTokens/Transfer";
import TransferNext from "../Components/MoreScreens/SendTokens/TransferNext";
import SendTokenSymbol from "../Components/MoreScreens/SendTokens/SendTokenSymbol";
import ImportSelectedItems from "../Components/MoreScreens/ImportSelectedItems";
import Welcome from "../Components/Splash/Welcome";
import ALogin from "../Components/AlreadyWallet/ALogin";
import ALoginTwo from "../Components/AlreadyWallet/ALoginTwo";
import ReceiveTestToken from "../Components/MoreScreens/ReceiveTestToken";
import AddToken from "../Components/AddToken/AddToken";
import SettingsMain from "../Components/Main/SettingsMain";
import Tokens from "../Components/Main/Tokens";
import BitCoin from "../Components/CoinDetails/BitCoin";
import Ethereum from "../Components/CoinDetails/Ethereum";
import Bnb from "../Components/CoinDetails/Bnb";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//                                                                      Tab Navigation
import Wallet from "../Components/Main/Wallet";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReceiveTestAmount from "../Components/MoreScreens/ReceiveCoinAmount";

//                                                                      Stack implementation
const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarHideOnKeyboard: true,
      }}
      // initialRouteName="Transfer"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Legal"
        component={LegalStatus}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="PrivacyPolicies"
        component={PrivacyPolicies}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="TermsOfServices"
        component={TermsOfServices}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="ReEnter"
        component={ReEnter}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReLogin"
        component={ReLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Attention"
        component={BackUpWallet}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="VerifySecretPhrase"
        component={VerifySecretPhrase}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Your Secret Phrase"
        component={SecretPhrase}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={BottomTab}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: Colors.primary,
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Buy Crypto"
        component={Buy}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Swap"
        component={Swap}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Send"
        component={Send}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../Src/media/search.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Receive"
        component={Receive}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Notification's"
        component={RefreshNotifications}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Notification 1"
        component={NotificationOne}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Receive Test Coin"
        component={ReceiveTestCoin}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Receive Test coin"
        component={ReceiveTestCoinTwo}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Add Custom Token"
        component={AddCustomToken}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Transfer Coin"
        component={TransferNext}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Send (token symbol)"
        component={SendTokenSymbol}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Import (Selected Item)"
        component={ImportSelectedItems}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="ALogin"
        component={ALogin}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="ALoginTwo"
        component={ALoginTwo}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Receive test coin"
        component={ReceiveTestToken}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Receive test Coin"
        component={ReceiveTestAmount}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Add Token"
        component={AddToken}
        options={{
          headerShown: false,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Tokens"
        component={Tokens}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Bitcoin"
        component={BitCoin}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../Src/media/graph.png")}
                style={{ width: 20, height: 20, marginRight: "10%" }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="Ethereum"
        component={Ethereum}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../Src/media/graph.png")}
                style={{ width: 20, height: 20, marginRight: "10%" }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
      <Stack.Screen
        name="BNB"
        component={Bnb}
        options={{
          headerShown: true,
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../Src/media/graph.png")}
                style={{ width: 20, height: 20, marginRight: "10%" }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

//                                                                          Tab Navigation implementation

const BoTab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <BoTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <BoTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <BoTab.Screen
        name="Settings"
        component={SettingsMain}
        options={{
          headerTintColor: Colors.primary,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </BoTab.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
