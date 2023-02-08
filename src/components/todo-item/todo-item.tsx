import { TouchableOpacity, View, Text } from "react-native";
import { TodoItemModel } from "./model";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { Colors } from "../../atomic/atm.constants";
import { useState } from "react";

interface TodoItemProps {
  onRemove: (task: string) => void;
  onComplete: (task: string) => void;
  todo: TodoItemModel;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onRemove,
  onComplete,
}) => {
  const [trashButtonColor, setTrashButtonColor] = useState(Colors.Gray300);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onComplete(todo.name)}
      >
        <Ionicons
          name={
            todo.isCompleted
              ? "checkmark-done-circle"
              : "checkmark-circle-outline"
          }
          color={todo.isCompleted ? Colors.PurpleDark : Colors.Blue}
          size={20}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={todo.isCompleted ? styles.textChecked : styles.text}>
          {todo.name}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.trash}
        onPress={() => {
          setTrashButtonColor(Colors.Danger);
          onRemove(todo.name);
        }}
      >
        <Ionicons name="trash" color={trashButtonColor} size={20} />
      </TouchableOpacity>
    </View>
  );
};
