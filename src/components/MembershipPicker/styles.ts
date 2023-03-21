import { StyleSheet } from "react-native";
import { Colors, Mixins, Spacing, Typography } from "_styles";

const styles = StyleSheet.create({
  planCardsContainer: {
    marginVertical: Spacing.SCALE_16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  planCard: {
    height: 122,
    width: Mixins.containerSize(2, 40),
    borderRadius: 16,
    margin: 3,
    backgroundColor: Colors.BLACK,
    padding: Spacing.SCALE_12,
  },
  planCardPrice: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Mixins.scaleFont(32),
    lineHeight: 36,
    letterSpacing: -2,
    color: Colors.WHITE,
    paddingBottom: Spacing.SCALE_12,
  },
  planCardTerm: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(18),
    lineHeight: 16,
    letterSpacing: -2,
    color: Colors.WHITE,
    paddingBottom: 4,
  },
  planCardName: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(13),
    lineHeight: 14,
    letterSpacing: -2,
    color: "#A7A7A7",
  },
});

export default styles;
