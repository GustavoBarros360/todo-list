import { StatusBar } from "react-native";
import { Home } from "./src/pages/home/home";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Loading />;
  return (
    <>
      <Home />
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </>
  );
}
