import { StyleSheet } from "react-native";
import { Colors, Mixins, Spacing, Typography } from "_styles";

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    flex: 1,
    backgroundColor: Colors.BLACK,
    paddingHorizontal: Spacing.SCALE_16,
  },
  headingContainer: {
    flexDirection: "row",
    marginBottom: 55,
  },
  headingContainerRight: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "50%",
    flexGrow: 0,
  },
  headingContainerLeft: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexBasis: "50%",
    flexGrow: 0,
    marginBottom: 40,
  },
  headingTextLeft: {
    color: Colors.PRIMARY,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(58),
    lineHeight: 66,
  },
  headingTextRightOne: {
    color: "#4D4E50",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(30),
    lineHeight: 36,
    marginTop: 20,
  },
  headingTextRightTwo: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(32),
    lineHeight: 36,
  },
  sondaText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(30),
    lineHeight: 34,
    marginBottom: 8,
  },
  sondaSubText: {
    color: "#4D4E50",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(16),
    lineHeight: 24,
    marginBottom: 40,
  },
  sondaDescription: {
    color: "#D7D7D7",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(16),
    lineHeight: 24,
    marginBottom: 40,
  },
  sectionHeading: {
    color: "#D7D7D7",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(30),
    lineHeight: 34,
    marginBottom: 16,
  },
  makersBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181818",
    height: 148,
    borderRadius: 16,
  },
  makersImage: {
    width: 61,
    height: 61,
    borderRadius: 50,
    marginBottom: 8,
  },
  makersName: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(16),
    lineHeight: 24,
    marginBottom: 4,
  },
  makersRole: {
    color: "#D7D7D7",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(14),
    lineHeight: 24,
  },
  madeBy: {
    color: "#D7D7D7",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(14),
    lineHeight: 24,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLogo: {
    width: 27,
    height: 41,
    marginVertical: 24,
  },
  copyrightContainer: {
    paddingBottom: 150,
  },
  copyrightText: {
    textAlign: "center",
    color: "#D7D7D7",
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(14),
    lineHeight: 24,
  },
});

export default styles;
