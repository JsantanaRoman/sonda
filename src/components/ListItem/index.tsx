import { Image, ImageContentFit, ImageSource } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export type Props = {
  text: string;
  onPress?: any;
  iconPath: ImageSource;
  contentFit?: ImageContentFit;
};

const ListItem: React.FC<Props> = ({ text, iconPath, onPress, contentFit }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.listItemContainer}>
        <Image
          style={styles.listItemIcon}
          source={iconPath}
          contentFit={contentFit ? contentFit : "contain"}
        ></Image>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
