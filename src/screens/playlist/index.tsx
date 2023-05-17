import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { IconButton } from "_components";
import { PlaylistCard } from "_components";
import { Constants } from "_utils";
import { globalStyles } from "../../styles/styles";
import styles from "./style";

const Playlists = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Playlist</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={globalStyles.closeIcon}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      {/* TODO: Replace Index with keyExtractor or add key to item attribute */}
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={Constants.PlaylistList}
        horizontal={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <PlaylistCard name={item.name} key={index} />
        )}
      />
    </View>
  );
};

export default Playlists;
