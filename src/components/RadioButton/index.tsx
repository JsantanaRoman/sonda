import React from "react";
import { View } from "react-native";
import { Colors } from "_styles";
import { styles } from "./styles";

export type Props = {
  isSelected: boolean;
};

const RadioButton: React.FC<Props> = ({ isSelected }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 16,
          width: 16,
          borderRadius: 50,
          borderWidth: 2,
          backgroundColor: isSelected ? Colors.PRIMARY : "",
          borderColor: isSelected ? Colors.PRIMARY : "#4D4E50",
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default RadioButton;
