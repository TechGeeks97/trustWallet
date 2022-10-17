import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";

import CheckBox from "react-native-custom-checkbox";

export default function LegalStatus({ navigation }) {
  const [check, setCheck] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(!check);
  const handleCheck = (name, checked) => {
    if (checked == false) {
      setCheck(!check);
      setButtonDisable(!buttonDisable);
    } else {
      setCheck(!check);
      setButtonDisable(!buttonDisable);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            margin: 10,
            width: 281,
            height: 28,
            fontSize: 12,
            fontWeight: "400",
            lineHeight: 13.8,
            color: "#545454",
          }}
        >
          Please review the Trust Plus Wallet Terms of Service and Private
          Policy.
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}>
        <View
          style={{
            width: 313,
            height: 87,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "#F2F2F2",
            position: "absolute",
            elevation: 1,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            margin: 5,
          }}
        >
          <View style={{ height: 43, overflow: "hidden" }}>
            <TouchableOpacity
              style={{
                height: 43,
                flexDirection: "row",
                width: 267,
                left: 23,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  lineHeight: 18,
                  color: "#818181",
                }}
              >
                Privacy Policy
              </Text>
              <Image source={require("../../Src/media/greater.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              width: 290,
              backgroundColor: "#E7E7E7",
              alignSelf: "flex-end",
            }}
          />
          <View style={{ height: 43, overflow: "hidden" }}>
            <TouchableOpacity
              style={{
                height: 43,
                flexDirection: "row",
                width: 267,
                left: 23,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  lineHeight: 18,
                  color: "#818181",
                }}
              >
                Term of Service
              </Text>
              <Image source={require("../../Src/media/greater.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
          }}
        >
          <CheckBox
            name="CheckBox"
            checked={check}
            style={{
              backgroundColor: "#FFF",
              color: "#3275BB",
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#3275BB",
            }}
            onChange={(name, checked) => handleCheck(name, checked)}
          />
          <Text style={{ marginHorizontal: 5, color: "#3275BB" }}>
            I've read and accept the Term of Service and Privet Policy
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}>
        <View
          style={{
            width: 312,
            height: 43.6,
            margin: 10,
          }}
        >
          <Button
            onPress={() => navigation.navigate("SignUp")}
            title="CONTINUE"
            disabled={buttonDisable}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
