import { StyleSheet, Text, View } from "react-native";

import AppNavigation from "./Config/AppNavigation";
import { ToastProvider } from "react-native-toast-notifications";
export default function App() {
  return (
    <ToastProvider
      successColor="green"
      textStyle={{ fontSize: 20, color: "green" }}
      renderToast={() => (
        <View
          style={{
            width: "70%",
            height: 50,
            borderRadius: 20,
            backgroundColor: "#eef7f9",
            opacity: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#77ab59" }}>
            Text copied to clipboard board
          </Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
