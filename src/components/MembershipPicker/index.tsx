import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "../BaseButton";
import { RootState } from "_store";
import { setMembershipSelected } from "../../store/slices/membershipSelected";
import styles from "./styles";

const MembershipPicker: React.FC = () => {
  const dispatch = useDispatch();
  const { membershipSelected } = useSelector(
    (state: RootState) => state.membershipSelected
  );

  const handlePress = (selectedPlan: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (membershipSelected !== selectedPlan) {
      dispatch(
        setMembershipSelected(
          membershipSelected === "Supporter" ? "Believer" : "Supporter"
        )
      );
    }
  };
  return (
    <View>
      <View style={styles.planCardsContainer}>
        <Pressable
          onPress={() => {
            handlePress("Supporter");
          }}
        >
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={
              membershipSelected === "Supporter"
                ? ["#EC6539", "#FF8862", "#FF9D66"]
                : ["#262626", "#262626"]
            }
            style={{ borderRadius: 16 }}
          >
            <View style={styles.planCard}>
              <Text style={styles.planCardPrice}>$13</Text>
              <Text style={styles.planCardTerm}>Per Year</Text>
              <Text style={styles.planCardName}>Supporter</Text>
            </View>
          </LinearGradient>
        </Pressable>
        <Pressable
          onPress={() => {
            handlePress("Believer");
          }}
        >
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={
              membershipSelected === "Believer"
                ? ["#EC6539", "#FF8862", "#FF9D66"]
                : ["#262626", "#262626"]
            }
            style={{ borderRadius: 16 }}
          >
            <View style={styles.planCard}>
              <Text style={styles.planCardPrice}>$45</Text>
              <Text style={styles.planCardTerm}>Lifetime</Text>
              <Text style={styles.planCardName}>Believer</Text>
            </View>
          </LinearGradient>
        </Pressable>
      </View>
      <BaseButton
        text={
          membershipSelected === "Supporter"
            ? "Pay Yearly"
            : "Get Lifetime Access"
        }
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      />
    </View>
  );
};

export default MembershipPicker;
