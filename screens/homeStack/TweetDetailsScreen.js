import { useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../components/TweetContent";

const TweetDetailScreen = () => {
  const {
    params: { tweet },
  } = useRoute();
  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
