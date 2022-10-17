import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";

import Colors from "../../Styles/Colors";

export default function Receive({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          width: "100%",
          height: 80,
          flexDirection: "row",
          backgroundColor: Colors.secondary,
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
          <Image
            source={require("../../Src/media/ArrowTwo.png")}
            style={{ width: 17, height: 12 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search - Receive"
          placeholderTextColor={"#F5F5F5"}
          style={{
            color: "#FFF",
            borderWidth: 0.5,
            borderColor: "#F5F5F5",
            borderRadius: 10,
            width: "60%",
            height: 40,
            padding: 5,
          }}
        />
        <View />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bitCoin.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$19,520.15</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35%
                </Text>
                <Text style={{ fontSize: 15 }}>0 BTN</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 2 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/ethereum.png")}
                style={{ width: 25, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 1750.87</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "red", marginLeft: 10 }}>
                  -12.5%
                </Text>
                <Text style={{ fontSize: 15 }}>0 ETH</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 3 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bnb1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>BNB</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 450.23</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35
                </Text>
                <Text style={{ fontSize: 15 }}>0 BNB</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 4 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bitCoin.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$19,520.15</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35%
                </Text>
                <Text style={{ fontSize: 15 }}>0 BTN</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 5 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/ethereum.png")}
                style={{ width: 25, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 1750.87</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "red", marginLeft: 10 }}>
                  -12.5%
                </Text>
                <Text style={{ fontSize: 15 }}>0 ETH</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 6 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bnb1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>BNB</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 450.23</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35
                </Text>
                <Text style={{ fontSize: 15 }}>0 BNB</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 7 */}

        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bitCoin.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Bitcoin</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$19,520.15</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35%
                </Text>
                <Text style={{ fontSize: 15 }}>0 BTN</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 8 */}
        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/ethereum.png")}
                style={{ width: 25, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>Ethereum</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 1750.87</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "red", marginLeft: 10 }}>
                  -12.5%
                </Text>
                <Text style={{ fontSize: 15 }}>0 ETH</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />

        {/* 9 */}
        <View
          style={{
            height: 70,
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Receive test coin")}
            style={{ height: 50, width: "90%", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/bnb1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>BNB</Text>
                <Text style={{ fontSize: 13, color: "#CCC" }}>$ 450.23</Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13, color: "green", marginLeft: 10 }}>
                  +5.35
                </Text>
                <Text style={{ fontSize: 15 }}>0 BNB</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", height: 1, backgroundColor: "#CCC" }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  same: {
    width: "95%",
    flex: 1,
    backgroundColor: Colors.primary,
  },
  one: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  OneImageContainer: {
    flex: 0.2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    width: 50,
    height: 50,
  },
  eImageStyle: {
    width: 30,
    height: 50,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  textSub: {
    flex: 0.8,
    backgroundColor: Colors.primary,
  },
  textSubA: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-between",
  },
  endText: {
    flex: 0.2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
