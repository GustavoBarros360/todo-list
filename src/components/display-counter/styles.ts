import { StyleSheet } from "react-native";
import { Colors, FontFamily } from "../../atomic/atm.constants";

export const styles = StyleSheet.create({
  container: {
    padding: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.Gray400,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: FontFamily.InterBold,
    fontSize: 12,
  },
});
