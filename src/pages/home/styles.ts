import { StyleSheet } from "react-native";
import { Colors, FontFamily } from "../../atomic/atm.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoArea: {
    flex: 1,
    backgroundColor: Colors.Gray700,
    alignItems: "center",
    justifyContent: "center",
  },
  listArea: {
    flex: 4,
    backgroundColor: Colors.Gray600,
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    position: "absolute",
    top: 0,
    transform: [{ translateY: -25 }],
  },
  input: {
    backgroundColor: Colors.Gray500,
    color: Colors.Gray100,
    height: 48,
    padding: 16,
    borderRadius: 6,
    flex: 1,
    marginRight: 4,
    fontFamily: FontFamily.InterRegular,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BlueDark,
  },
  todoInfoContainer: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 56,
    borderBottomColor: Colors.Gray100,
    borderBottomWidth: 0.3,
    paddingBottom: 16,
    marginBottom: 24,
  },
  createdText: {
    color: Colors.Blue,
    fontFamily: FontFamily.InterBold,
    marginRight: 4,
  },
  concludedText: {
    color: Colors.Purple,
    fontFamily: FontFamily.InterBold,
    marginRight: 4,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
