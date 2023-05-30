import { IconButton } from "_components";
import { store } from "_store";
import { Colors, GlobalStyles, Spacing } from "_styles";
import { Audio } from "expo-av";
import * as Fonts from "expo-font";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

let customFonts = {
  "AtHauss-Regular": require("../assets/fonts/AtHaussStd-Retina.otf"),
  "AtHauss-Medium": require("../assets/fonts/AtHaussStd-Medium.otf"),
  "AtHauss-Super": require("../assets/fonts/AtHaussStd-Super.otf"),
};

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    hideSplash();
  }, []);

  const hideSplash = async () => {
    try {
      initializeApp();
    } catch {}
  };

  const initializeApp = async () => {
    try {
      await Fonts.loadAsync(customFonts);
      Audio.requestPermissionsAsync();
      Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      await SplashScreen.hideAsync();
    } catch (error) {
      console.log("Initialization Error:", error);
    }
  };

  return (
    <Provider store={store}>
      <Stack
        initialRouteName="index"
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
              <Image
                source={require("../assets/images/logo.svg")}
                style={styles.headerLogo}
              />
            ),
            headerRight: () => (
              <View style={styles.headingRight}>
                <IconButton
                  iconPath={require("../assets/images/settings.svg")}
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
          name="features"
          options={{
            headerStyle: { backgroundColor: Colors.BLACK },
            headerTitleStyle: { color: Colors.WHITE },
            headerTitleAlign: "center",
            presentation: "modal",
            headerTitle: "Features",
            headerLeft: () => (
              <Text style={{ color: Colors.GRAY_300 }}>Restore</Text>
            ),
            headerRight: () => (
              <View>
                <IconButton
                  iconPath={require("../assets/images/close.svg")}
                  iconStyle={GlobalStyles.globalStyles.closeIcon}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    router.back();
                  }}
                />
              </View>
            ),
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
          name="privacy"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="terms"
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
                  iconPath={require("../assets/images/close.svg")}
                  iconStyle={GlobalStyles.globalStyles.closeIcon}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
    height: 22,
    width: 22,
  },
  headerLogo: {
    height: 41,
    width: 27,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
