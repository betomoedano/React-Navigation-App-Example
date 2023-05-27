import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import TweetContent from "./TweetContent";

const Tweet = ({ tweet }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailScreen", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

export default Tweet;
