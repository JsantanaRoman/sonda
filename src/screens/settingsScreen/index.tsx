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
import styles from "./style";

const SettingsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Settings</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={styles.closeIcon}
          contentFit={"contain"}
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
        />
        <Text style={styles.sectionHeading}>Settings</Text>
        <ListItem
          text="Customize"
          iconPath={require("../../assets/images/wand.svg")}
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
        />
        <ListItem
          text="Terms and Conditions"
          iconPath={require("../../assets/images/t&c.svg")}
        />
        <ListItem
          text="About Sonda"
          iconPath={require("../../assets/images/about-us.svg")}
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

export default SettingsScreen;
