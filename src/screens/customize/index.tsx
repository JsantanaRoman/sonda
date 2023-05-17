import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { IconButton, RadioButton } from "_components";
import { Constants } from "_utils";
import { GlobalStyles } from "_styles";
import styles from "./style";

const Customize = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Customize</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={GlobalStyles.globalStyles.closeIcon}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <Text style={styles.sectionHeading}>Change Icon</Text>
      {/* TODO: Replace Index with keyExtractor or add key to item attribute */}
      <FlatList
        numColumns={3}
        data={Constants.customLogos}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View style={{ height: 40 }}></View>}
        renderItem={({ item, index }) => (
          <View style={styles.gridItem}>
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

export default Customize;
