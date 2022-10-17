import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { Component } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ["", "", "", "", "", ""],
    };
  }
  render() {
    let numbers = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 0 },
    ];

    const _onPressNumber = (num) => {
      let tempCode = this.state.passcode;
      for (var i = 0; i < tempCode.length; i++) {
        if (i == 5) {
          // alert('done')
          this.props.navigation.navigate("ReLogin");
        }
        if (tempCode[i] == "") {
          tempCode[i] = num;
          break;
        } else {
          continue;
        }
      }
      this.setState({ passcode: tempCode });
    };
    const _handleCancel = () => {
      let tempCode = this.state.passcode;
      for (var i = tempCode.length - 1; i >= 0; i--) {
        if (temp[i] != "") {
          tempCode[i] = num;
          break;
        } else {
          continue;
        }
      }
      this.setState({ passcode: tempCode });
    };

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <View
            style={{
              flex: 0.2,
              backgroundColor: "#FFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="lock" size={25} color={"#000"} />
              <Text style={styles.swipeUPText}>Swipe up to Unlock</Text>
            </View>
          </View>

          <View
            style={{ flex: 0.2, backgroundColor: "#FFF", alignItems: "center" }}
          >
            <View style={{ flex: 0.8, width: "50%", backgroundColor: "#FFF" }}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.passCodeText}>Enter PassCode</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                }}
              >
                {this.state.passcode.map((p) => {
                  let style = p != "" ? styles.code2 : styles.code1;
                  return <View style={style}></View>;
                })}
              </View>
            </View>
            <View
              style={{
                width: "70%",
                flex: 0.2,
                backgroundColor: "#FFF",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{ width: "100%", height: 1, backgroundColor: "#CCC" }}
              />
            </View>
          </View>

          <View
            style={{ flex: 0.6, backgroundColor: "#FFF", alignItems: "center" }}
          >
            <View
              style={{
                flex: 0.9,
                width: "90%",
                backgroundColor: "#FFF",
                alignItems: "center",
              }}
            >
              <View style={{ width: 282, height: 348 }}>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 282,
                    height: 348,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {numbers.map((num) => {
                    return (
                      <TouchableOpacity
                        style={{
                          margin: 5,
                          width: 75,
                          height: 75,
                          borderColor: "#AAA",
                          backgroundColor: "rgba(255,255,255,0.3)",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        key={num.id}
                        onPress={(id) => _onPressNumber(id)}
                      >
                        <Text style={styles.numberText}>{num.id}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  swap: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    top: 200,
  },
  swipeUPText: {
    fontSize: 17,
    color: "#000",
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  passCodeText: {
    fontSize: 19,
    color: "#000",
    letterSpacing: 0.34,
    lineHeight: 25,
  },
  codeContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  code1: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#AAA",
  },
  code2: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: "#000",
  },

  numberContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 282,
    height: 348,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    margin: 5,
    width: 75,
    height: 75,
    borderColor: "#AAA",
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 36,
    color: "#AAA",
    letterSpacing: 0,
    textAlign: "center",
  },

  buttons: {
    top: 350,
    marginTop: 76,
    marginLeft: 46,
    marginRight: 46,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    letterSpacing: -0.39,
    textAlign: "center",
  },
});

//<View style={styles.buttons}>
//                     <TouchableOpacity onPress={_handleCancel}>
//                         <Text style={styles.buttonText}>Emergency</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
