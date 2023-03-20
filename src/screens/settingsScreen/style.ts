import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";
import { FONT_FAMILY_REGULAR } from "../../styles/typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.SCALE_24,
  },
  headingContainer: {
    padingVertical: Spacing.SCALE_32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 108,
  },
  heading: {
    fontSize: 40,
    fontFamily: FONT_FAMILY_REGULAR,
    letterSpacing: -2,
    lineHeight: 45.6,
    color: Colors.WHITE,
  },
  sectionHeading: {
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight: 22,
    color: Colors.WHITE,
    marginBottom: 24,
    marginTop: 40,
  },
  madeInPRLogo: {
    width: 99,
    height: 106,
    marginVertical: 40,
  },
});

export default styles;
