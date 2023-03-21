import { StyleSheet } from "react-native";
import { Colors, Mixins, Spacing, Typography } from "_styles";

const styles = StyleSheet.create({
  playlistCard: {
    backgroundColor: Colors.PRIMARY,
    height: 255,
    width: 163,
    borderRadius: 170,
    marginBottom: Spacing.SCALE_16,
    marginHorizontal: Spacing.SCALE_16,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: Spacing.SCALE_32,
  },
  playlistCardText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Mixins.scaleFont(20),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: 23,
    letterSpacing: -0.02,
    textAlign: "center",
    color: Colors.WHITE,
    width: 103,
  },
});

export default styles;
