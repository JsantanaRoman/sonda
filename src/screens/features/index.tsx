import { ScrollView } from "react-native";
import { SondaPlusText } from "../../components";
import styles from "./style";

const Features = () => {
  return (
    <ScrollView style={styles.container}>
      <SondaPlusText />
    </ScrollView>
  );
};

export default Features;
