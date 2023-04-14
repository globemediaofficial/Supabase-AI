import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import Post from "../objects/Post";

const GridItem = (props: { post: Post; hover: any }) => {
  var hover = props.hover == props.post.imageUrl;

  return (
    <View
      style={{
        padding: 20,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          borderRadius: 15,
          shadowColor: "#5e5e5e",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 15,
          }}
          blurRadius={hover ? 1 : 0}
          resizeMode={"cover"}
          source={{ uri: props.post.imageUrl }}
        />
        {hover && (
          <TouchableOpacity
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: hover ? "#a1a1a1" + "80" : undefined,
              borderRadius: 15,
              overflow: "hidden",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Icon name={"download"} size={25} /> */}
            <Text style={{ textAlign: "center", fontWeight: "700" }}>
              "{props.post.prompt}"
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GridItem;
