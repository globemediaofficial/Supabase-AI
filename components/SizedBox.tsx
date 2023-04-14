import React from "react";
import { View } from "react-native";

type BoxProps = {
  vertical?: number;
  horizontal?: number;
};

const SizedBox = (props: BoxProps) => {
  return (
    <View
      style={{
        marginVertical: props.vertical,
        marginHorizontal: props.horizontal,
      }}
    />
  );
};

export default SizedBox;
