import { Audio } from "expo-av";
import * as Fonts from "expo-font";
import * as Haptics from "expo-haptics";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Spacing, GlobalStyles } from "_styles";
import { IconButton } from "_components";
import { Provider } from "react-redux";
import { store } from "_store";
import {} from "_styles";

let customFonts = {
  "AtHauss-Regular": require("./../src/assets/fonts/AtHaussStd-Retina.otf"),
  "AtHauss-Medium": require("./../src/assets/fonts/AtHaussStd-Medium.otf"),
  "AtHauss-Super": require("./../src/assets/fonts/AtHaussStd-Super.otf"),
};

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [initialize, setinitialize] = useState(false);
  const router = useRouter();

  const initializeApp = async () => {
    try {
      await Fonts.loadAsync(customFonts);
      Audio.requestPermissionsAsync();
      Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      setinitialize(true);
      if (initialize) {
        SplashScreen.hideAsync();
      }

      if (!initialize) {
        return null;
      }
    } catch (error) {
      console.log("Initialization Error:", error);
    }
  };

  initializeApp();

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.BLACK,
          },
          headerTitle: "",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => (
              <IconButton
                iconPath={require("../src/assets/images/logo.svg")}
                iconStyle={styles.headerLogo}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
              />
            ),
            headerRight: () => (
              <View style={styles.headingRight}>
                <IconButton
                  iconPath={require("../src/assets/images/hamburger.svg")}
                  iconStyle={styles.headerIcons}
                  onPress={() => {
                    router.push("/playlists");
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                />
                <IconButton
                  iconPath={require("../src/assets/images/settings.svg")}
                  iconStyle={[
                    styles.headerIcons,
                    { marginLeft: Spacing.SCALE_24 },
                  ]}
                  onPress={() => {
                    router.push("/settings");
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="playlists"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="customize"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            headerStyle: { backgroundColor: Colors.BLACK },
            headerTitleStyle: { color: Colors.WHITE },
            presentation: "modal",
            headerTitle: "About Sonda",
            headerRight: () => (
              <View>
                <IconButton
                  iconPath={require("../src/assets/images/close.svg")}
                  iconStyle={GlobalStyles.globalStyles.closeIcon}
                  onPress={() => {
                    router.back();
                  }}
                />
              </View>
            ),
          }}
        />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headingRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 41,
  },
  headerIcons: {
    height: 16,
    width: 16,
  },
  headerLogo: {
    height: 24,
    width: 27,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
