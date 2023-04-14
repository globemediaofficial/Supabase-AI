import { FlatList } from "react-native";
import GridItem from "./GridItem";
import Post from "../objects/Post";

const GridView = (props: { posts: Post[]; hover: any; setHover: any }) => {
  return (
    <FlatList
      // style={{ paddingTop: 50 }}
      numColumns={3}
      data={props.posts}
      renderItem={({ item }) => {
        return (
          <div
            onMouseEnter={() => {
              props.setHover(item.imageUrl);
              console.log("hover: " + props.hover);
            }}
            onMouseLeave={() => {
              props.setHover("");
              console.log("hover: " + props.hover);
            }}
          >
            <GridItem post={item} hover={props.hover} />
          </div>
        );
      }}
    />
  );
};

export default GridView;
