import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";

import AppText from "../../Styles/Texts/AppText";
import Colors from "../../Styles/Colors";
import DangerText from "../../Styles/Texts/DangerText";
import BlueText from "../../Styles/Texts/BlueText";
import { useToast } from "react-native-toast-notifications";

export default function SecretPhrase({ navigation }) {
  const toast = useToast();
  return (
    <View style={styles.container}>
      <View style={styles.subOne}>
        <View style={styles.subOneSub}>
          <AppText>
            This your Secret Phrase. Write it down or copy it and safe it some
            ware safe. Do not share it with nobody.
          </AppText>
        </View>
      </View>
      <View style={styles.subTwo}>
        <View style={styles.subTwoSub}>
          <View style={styles.subTwoSubOne}>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subTwoSubTwo}>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subTwoSubThree}>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 11</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subTwoSubFour}>
            <TouchableOpacity style={styles.TouchableStyle}>
              <Text>Text 12</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subThree}>
        <TouchableOpacity
          onPress={() => {
            toast.hideAll();
            toast.show("Hello World");
            // ToastAndroid.show(
            //   "Text copied to clipboard board",
            //   ToastAndroid.SHORT
            // )
          }}
        >
          <BlueText>COPY</BlueText>
        </TouchableOpacity>
        <View style={styles.subThreeSub}>
          <DangerText>Do Not Share These Words to Anyone.</DangerText>
          <Text style={{ textAlign: "center", color: Colors.danger }}>
            It will give the full access of the person who has the code to your
            wallet.
          </Text>
        </View>
      </View>
      <View style={styles.subFour}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Wallet")}
        >
          <Text style={styles.ButtonTextStyle}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subOne: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  subOneSub: {
    flex: 0.8,
    width: "90%",
    backgroundColor: Colors.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  subTwo: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  subTwoSub: {
    flex: 1,
    width: "90%",
  },
  subTwoSubOne: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
  },
  subTwoSubTwo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
  },
  subTwoSubThree: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },
  subTwoSubFour: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },

  subThree: {
    flex: 2,
    backgroundColor: Colors.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subThreeSub: {
    width: "90%",
    flex: 0.4,
    backgroundColor: Colors.gangerBorder,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.danger,
    overflow: "hidden",
    alignItems: "center",
  },

  subFour: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.4,
    width: "90%",
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  ButtonTextStyle: {
    fontSize: 20,
    color: Colors.primary,
  },

  TouchableStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 0.3,
    backgroundColor: "white",
    margin: 2,
    borderWidth: 1,
    borderColor: Colors.divider,
  },
});
