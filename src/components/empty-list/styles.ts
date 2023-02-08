import { StyleSheet } from "react-native";
import { FontFamily } from "../../atomic/atm.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textNormal: {
    color: "#fff",
    textAlign: "center",
    fontFamily: FontFamily.InterRegular,
  },
  textBold: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: FontFamily.InterBold,
  },
});
