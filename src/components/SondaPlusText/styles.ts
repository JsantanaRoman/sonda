import { StyleSheet } from "react-native";
import { Colors, Mixins, Typography } from "_styles";

const styles = StyleSheet.create({
  sondaPlusTextContainer: {
    display: "flex",
    flexDirection: "row",
  },
  sondaPlusTextOne: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(24),
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  sondaPlusTextTwo: {
    color: Colors.WHITE,
    fontSize: Mixins.scaleFont(20),
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  sondaPlusTextTwoContainer: {
    marginLeft: 2,
    borderRadius: 51,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
  },
});

export default styles;
