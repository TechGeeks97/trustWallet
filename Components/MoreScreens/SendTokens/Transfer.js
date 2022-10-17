import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import ItemsDivider from "../../../Styles/ItemsDivider";

const { height } = Dimensions.get("window");

export default function Transfer({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        style={{
          // backgroundColor: "red",
          paddingBottom: 0,
          marginBottom: 0,
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={[styles.allSame, styles.one]}>
            <Text
              style={{ fontSize: 20, fontWeight: "700", marginVertical: 5 }}
            >
              -100(Token Symbol)
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 5 }}>
              =$ 6.45
            </Text>
          </View>
          {/* <View style={{ backgroundColor: "#FFF" }} /> */}
          <View style={[styles.allSame, styles.two]}>
            <View
              style={{
                width: 305,
                // height: 145,
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.5,
                borderColor: "#E2E2E2",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000000",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  Asset
                </Text>
                <TextInput
                  placeholder="Asset Name & symbol"
                  multiline={true}
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#8C8C8C",
                    flex: 1,
                  }}
                />
              </View>
              <ItemsDivider />
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000000",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  From
                </Text>
                <TextInput
                  placeholder="Wallet Name"
                  multiline={true}
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#8C8C8C",
                    flex: 1,
                  }}
                />
              </View>
              <ItemsDivider />
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000000",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  To
                </Text>
                <TextInput
                  placeholder=""
                  multiline={true}
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#8C8C8C",
                    flex: 1,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ height: 30, backgroundColor: "#FFF" }} />
          <View style={[styles.allSame, styles.three]}>
            <View
              style={{
                width: 305,
                height: 114,
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                borderWidth: 0.5,
                borderColor: "#E2E2E2",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000000",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  Network Fee
                </Text>
                <TextInput
                  placeholder="0.3 (token symbol) $ 0.012"
                  multiline={true}
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#8C8C8C",
                    flex: 1,
                  }}
                />
              </View>
              <ItemsDivider />
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#000000",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  Total
                </Text>
                <TextInput
                  placeholder="$ 100.012"
                  multiline={true}
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#8C8C8C",
                    flex: 1,
                  }}
                />
              </View>
            </View>
          </View>
          {/* <View style={{ height: 50, backgroundColor: "#FFF" }} /> */}
          {/* <View style={{ height: 100, backgroundColor: "#FFF" }} /> */}
        </View>
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View
            style={[
              {
                flexDirection: "row",
                alignSelf: "center",
                marginTop: "15%",
                alignItems: "flex-end",
                height: "100%",
                width: "100%",
                // backgroundColor: "red",
                justifyContent: "center",
                flex: 1,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Transfer Coin")}
              style={{
                width: "90%",
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3275BB",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#E2E2E2" }}
              >
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  allSame: {
    backgroundColor: "#FFF",
  },
  one: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  two: {
    flex: 2,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  three: {
    flex: 2,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  four: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    // marginBottom: 130,
  },
});
