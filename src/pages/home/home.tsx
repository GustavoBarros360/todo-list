import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Colors } from "../../atomic/atm.constants";
import { DisplayCounter } from "../../components/display-counter";
import { EmptyListView } from "../../components/empty-list";
import { TodoItem, TodoItemModel } from "../../components/todo-item";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Home: React.FC = () => {
  const [task, setTask] = useState<string>();
  const [todos, setTodos] = useState<TodoItemModel[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prevState) => [...prevState, { name: task, isCompleted: false }]);
    setTask(undefined);
  };

  const handleRemoveTodo = (task: string) => {
    setTodos((prevState) => prevState.filter((item) => item.name !== task));
  };

  const handleCompleteTodo = (task: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.name === task) {
        return { name: todo.name, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const concludedTodosCounter = todos.filter((todo) => todo.isCompleted).length;

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.listArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={Colors.Gray300}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddTodo(task ?? "")}
          >
            <Ionicons name="add-circle-outline" color="white" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.todoInfoContainer}>
          <View style={styles.counterContainer}>
            <Text style={styles.createdText}>Criadas</Text>
            <DisplayCounter counter={todos?.length ?? 0} />
          </View>
          <View style={styles.counterContainer}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <DisplayCounter counter={concludedTodosCounter} />
          </View>
        </View>

        <FlatList
          data={todos}
          keyExtractor={(item, index) => `${item}-${index}`}
          ListEmptyComponent={<EmptyListView />}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onRemove={handleRemoveTodo}
              onComplete={handleCompleteTodo}
            />
          )}
        />
      </View>
    </View>
  );
};
