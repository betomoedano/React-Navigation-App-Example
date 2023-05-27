import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function Payments() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Payments</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
