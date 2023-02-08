import { View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../atomic/atm.constants";

export const EmptyListView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="list" size={36} color={Colors.Gray300} />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
