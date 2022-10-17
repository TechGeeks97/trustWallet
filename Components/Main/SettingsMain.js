import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";

export default function SettingsMain() {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleSwitch = () => {
    if (isEnabled) {
    } else {
    }
    setIsEnabled((previousState) => !previousState);
  };

  const [url, setUrl] = useState();
  const handleQR = async () => {
    // console.warn('working')
    const data = await ImagePicker.launchImageLibraryAsync();
    if (!data.cancelled) {
      setUrl(data.uri);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{ width: "100%", backgroundColor: "#FFF", flex: 1 }}>
        {/* Wallet */}

        <View style={{ width: "100%", height: 20, backgroundColor: "#FFF" }} />
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/WalletImage.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Main Wallet</Text>
              <Text style={{ color: "#8A8A8A" }}>Main Wallet 1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 15, backgroundColor: "#F5F5F5" }}
        />

        {/* Dark Mode */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Dark-Mode.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Dark Mode</Text>
              <Switch
                value={isEnabled}
                onChange={handleSwitch}
                trackColor={{ false: "#8C8C8C", true: "#000" }}
                thumbColor={isEnabled ? "#fff" : "#C8C8C8"}
              />
            </View>
          </View>
        </View>
        <View
          style={{ width: "100%", height: 15, backgroundColor: "#F5F5F5" }}
        />

        {/* Price Alert */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Price-Alert.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Price Alerts</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Scan QR Code */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleQR}
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Scan.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Scan QR Code</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Wallet Connect */}

        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Wallet-Connect.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>WalletConnect</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 15, backgroundColor: "#F5F5F5" }}
        />

        {/* Preferences */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Setting2.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Preferences</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Security */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../Src/media/Securitys.jpg")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Security</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Push Notification */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Pusg-Notification.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Push Notifications</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 15, backgroundColor: "#F5F5F5" }}
        />

        {/* Help Center */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Help-Center.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Help Center</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* About */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/About.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>About</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 15, backgroundColor: "#F5F5F5" }}
        />

        {/* Twitter */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFFF",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../Src/media/Twitter.png")}
                style={{ width: 35, height: 35 }}
                // resizeMode="cover"
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Twitter</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Telegram */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Telegram.webp")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Telegram</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Facebook */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Facebook.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* Reddit */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Reddit.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Reddit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#8C8C8C" }}
        />

        {/* YouTube */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#FFF",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              flexDirection: "row",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../Src/media/Youtube.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: "#FFF",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Youtube</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
