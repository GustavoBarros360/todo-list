import { StyleSheet } from "react-native";
import { Colors, FontFamily } from "../../atomic/atm.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: Colors.Gray500,
    marginHorizontal: 24,
    flexDirection: "row",
    marginBottom: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {},
  trash: {},
  text: {
    fontFamily: FontFamily.InterRegular,
    color: "white",
    fontSize: 12,
  },
  textContainer: {
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 12,
  },
  textChecked: {
    fontFamily: FontFamily.InterRegular,
    color: "white",
    fontSize: 12,
    textDecorationStyle: "dashed",
    textDecorationColor: Colors.Gray100,
    textDecorationLine: "line-through",
  },
});
