import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import {
  IconButton,
  ListItem,
  MembershipPicker,
  SondaPlusText,
} from "_components";
import { GlobalStyles } from "_styles";
import styles from "./style";

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Settings</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={GlobalStyles.globalStyles.closeIcon}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.back();
          }}
        />
      </View>
      <ScrollView>
        <SondaPlusText />
        <MembershipPicker />
        <ListItem
          text="Restore purchase"
          iconPath={require("../../assets/images/money.svg")}
        />
        <ListItem
          text="See Features"
          iconPath={require("../../assets/images/stars.svg")}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/features");
          }}
        />
        <Text style={styles.sectionHeading}>Settings</Text>
        <ListItem
          text="Customize"
          iconPath={require("../../assets/images/wand.svg")}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/customize");
          }}
        />
        <Text style={styles.sectionHeading}>Information</Text>
        <ListItem
          text="Contact"
          iconPath={require("../../assets/images/mail.svg")}
        />
        <ListItem
          text="Send Feedback"
          iconPath={require("../../assets/images/message.svg")}
        />
        <ListItem
          text="Privacy Policy"
          iconPath={require("../../assets/images/shield.svg")}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/privacy");
          }}
        />
        <ListItem
          text="Terms and Conditions"
          iconPath={require("../../assets/images/t&c.svg")}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/terms");
          }}
        />
        <ListItem
          text="About Sonda"
          iconPath={require("../../assets/images/about-us.svg")}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/about");
          }}
        />
        <ListItem
          text="Do you love us?"
          iconPath={require("../../assets/images/love.svg")}
        />
        <Image
          style={styles.madeInPRLogo}
          source={require("../../assets/images/made-in-pr.png")}
          contentFit="contain"
        ></Image>
      </ScrollView>
    </View>
  );
};

export default Settings;
