import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "_store";
import { Constants } from "_utils";
import { BaseButton } from "_components";
import { setMembershipSelected } from "../../store/slices/membershipSelected";
import styles from "./style";

const Features = () => {
  const dispatch = useDispatch();

  const { membershipSelected } = useSelector(
    (state: RootState) => state.membershipSelected
  );

  const handlePress = (selectedPlan: Constants.planType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (membershipSelected !== selectedPlan) {
      dispatch(
        setMembershipSelected(
          membershipSelected === Constants.planType.Supporter
            ? Constants.planType.Believer
            : Constants.planType.Supporter
        )
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          resizeMode="contain"
          source={
            membershipSelected === Constants.planType.Supporter
              ? require("../../assets/images/supporter-card.png")
              : require("../../assets/images/believer-card.png")
          }
          style={styles.backgroundImageContainer}
          imageStyle={styles.backgroundImage}
        >
          <Image
            source={require("../../assets/images/sonda-plus.png")}
            style={styles.sondaPlus}
          />
          <View style={styles.planButtonContainer}>
            <Pressable
              onPress={() => {
                handlePress(Constants.planType.Supporter);
              }}
            >
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                colors={
                  membershipSelected === Constants.planType.Supporter
                    ? ["#EC6539", "#FF8862", "#FF9D66"]
                    : ["#262626", "#262626"]
                }
                style={{ borderRadius: 12 }}
              >
                <View style={styles.planButton}>
                  <Text style={styles.planButtonText}>Supporter</Text>
                </View>
              </LinearGradient>
            </Pressable>
            <View style={{ width: 8 }}></View>
            <Pressable
              onPress={() => {
                handlePress(Constants.planType.Believer);
              }}
            >
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                colors={
                  membershipSelected === Constants.planType.Believer
                    ? ["#EC6539", "#FF8862", "#FF9D66"]
                    : ["#262626", "#262626"]
                }
                style={{ borderRadius: 12 }}
              >
                <View style={styles.planButton}>
                  <Text style={styles.planButtonText}>Believer</Text>
                </View>
              </LinearGradient>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      {/* 
        Image with Text Container 
        image={require("")
        text ="All sounds for you to play anytime.
        Without limits."
      */}
      {/* 
        Image with Text Container 
        image={require("")
        text ="Unlock icons to spice up your Home Screen."
      */}
      {/* 
       membershipSelected === Constants.planType.Believer
        Image with Text Container 
        image={require("")
        text ="Unlimited updates. Forever."
      */}
      {/* 
        Image with Text Container 
        image={require("")
        text ="No ads, no tracking. Ever."
      */}
      <View style={{ height: 20 }}></View>
      <View>
        <BaseButton
          text={
            membershipSelected === Constants.planType.Supporter
              ? "$13.00/Year, cancel anytime"
              : "$45.00 one time. Yours forever."
          }
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        />
      </View>
    </ScrollView>
  );
};

export default Features;
