import { StyleSheet } from "react-native";
import { Colors, Spacing } from "_styles";
import { FONT_FAMILY_REGULAR } from "../../styles/typography";

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: Colors.BLACK,
    paddingHorizontal: Spacing.SCALE_16,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  headingContainerRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "50%",
    flexGrow: 0,
  },
  headingContainerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "50%",
    flexGrow: 0,
    marginBottom: 40,
  },
  headingTextLeft: {
    color: Colors.PRIMARY,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 58,
    lineHeight: 66,
  },
  headingTextRightOne: {
    color: "#4D4E50",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 30,
    lineHeight: 36,
  },
  headingTextRightTwo: {
    color: Colors.WHITE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 32,
    lineHeight: 36,
  },
  sondaText: {
    color: Colors.WHITE,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 30,
    lineHeight: 34,
    marginBottom: 8,
  },
  sondaSubText: {
    color: "#4D4E50",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },
  sondaDescription: {
    color: "#D7D7D7",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },
  sectionHeading: {
    color: "#D7D7D7",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 30,
    lineHeight: 34,
    marginBottom: 16,
  },
  makersBox: {
    display: "flex",
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
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  makersRole: {
    color: "#D7D7D7",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 24,
  },
  madeBy: {
    color: "#D7D7D7",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 24,
  },
  centerContainer: {
    display: "flex",
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
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 24,
  },
});

export default styles;
