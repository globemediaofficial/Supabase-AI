import { Text, View, Image, TouchableOpacity } from "react-native";
import Post from "../objects/Post";
import Styles from "../Styles";

const GridItem = (props: { post: Post; hover: any }) => {
  var hover = props.hover == props.post.imageUrl;

  const styles = Styles.GridItemStyle(hover);

  return (
    <View
      style={{
        padding: 20,
        borderRadius: 15,
      }}
    >
      <View style={styles.shadow}>
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
          <TouchableOpacity style={styles.opacity}>
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
