import { StyleSheet } from "react-native";
import { Colors, Mixins, Spacing, Typography } from "_styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
  },
  headingContainer: {
    paddingHorizontal: Spacing.SCALE_24,
    padingVertical: Spacing.SCALE_32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 108,
  },
  heading: {
    fontSize: Mixins.scaleFont(40),
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    letterSpacing: -2,
    lineHeight: 45.6,
    color: Colors.WHITE,
  },
  closeIcon: {
    height: 18,
    width: 18,
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
  },
});

export default styles;
