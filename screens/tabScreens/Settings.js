import { signOut } from "firebase/auth";
import { Button, Text, View } from "react-native";
import { auth } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOut(auth);
          await AsyncStorage.removeItem("@user");
        }}
      />
    </View>
  );
}
