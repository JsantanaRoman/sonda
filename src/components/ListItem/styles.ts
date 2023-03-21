import { StyleSheet } from "react-native";
import { Mixins, Spacing } from "_styles";

const styles = StyleSheet.create({
  listItemContainer: {
    borderBottomColor: "#262626",
    borderBottomWidth: 1,
    paddingVertical: Spacing.SCALE_16,
    flexDirection: "row",
  },
  listItemIcon: {
    width: 19,
    height: 19,
    marginRight: Spacing.SCALE_16,
  },
  listItemText: {
    fontSize: Mixins.scaleFont(17),
    lineHeight: 19,
    color: "#D7D7D7",
  },
});

export default styles;
