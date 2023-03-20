import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, Dimensions, Text, View } from "react-native";
import { IconButton, RadioButton } from "_components";
import { Constants } from "_utils";
import { globalStyles } from "../../styles/styles";
import styles from "./style";

const screenWidth = Dimensions.get("screen").width;
const numberOfColumns = 3;
const tileSize = screenWidth / numberOfColumns - 32;

const CustomizeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Customize</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={globalStyles.closeIcon}
          contentFit={"contain"}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <Text style={styles.sectionHeading}>Change Icon</Text>
      <FlatList
        numColumns={3}
        data={Constants.customLogos}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View style={{ height: 40 }}></View>}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: tileSize,
              height: tileSize,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
            />
            <RadioButton isSelected={index === 0 ? true : false} />
          </View>
        )}
      />
    </View>
  );
};

export default CustomizeScreen;
