import { StyleSheet } from "react-native";
import { Colors, Mixins, Spacing, Typography } from "_styles";

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: Colors.BLACK,
    paddingHorizontal: Spacing.SCALE_16,
  },
  headerContainer: {
    height: 280,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImageContainer: {
    alignItems: "center",
  },
  backgroundImage: {
    marginTop: 30,
    height: 210,
    width: 270,
  },
  sondaPlus: {
    height: 37,
    width: 173,
  },
  planButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 200,
  },
  planButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.BLACK,
    height: 50,
    width: 120,
    borderRadius: 12,
    margin: 3,
  },
  planButtonText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Mixins.scaleFont(16),
    color: Colors.WHITE,
    lineHeight: 19,
    letterSpacing: -2,
  },
});

export default styles;
