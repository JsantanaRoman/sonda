import { StyleSheet } from "react-native";
import { Colors, Mixins, Typography } from "_styles";

const styles = StyleSheet.create({
  baseButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: 54,
    borderRadius: Mixins.scaleSize(12),
  },
  baseButtonText: {
    color: Colors.BLACK,
    fontSize: Mixins.scaleFont(20),
    lineHeight: 22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});

export default styles;
