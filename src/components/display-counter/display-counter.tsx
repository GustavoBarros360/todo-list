import { View, Text } from "react-native";
import { styles } from "./styles";

interface DisplayCounterProps {
  counter: number;
}

export const DisplayCounter: React.FC<DisplayCounterProps> = ({ counter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
    </View>
  );
};
