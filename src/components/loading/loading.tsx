import { ActivityIndicator, View } from "react-native";
import { Colors } from "../../atomic/atm.constants";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BlueDark,
      }}
    >
      <ActivityIndicator color={Colors.BlueDark} />
    </View>
  );
}
