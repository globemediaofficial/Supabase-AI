import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import SizedBox from "./SizedBox";
import Icon from "@expo/vector-icons/FontAwesome5";
import Post from "../objects/Post";

const Header = (props: {
  styles: any;
  setActive: any;
  setInput: any;
  input: any;
  // setFilter: any;
  // posts: Post[];
  popup: any;
  setPopup: any;
}) => {
  return (
    <SafeAreaView style={props.styles.top}>
      <View style={props.styles.header}>
        <Icon name={"search"} size={20} color={"#a999e2"} />
        <SizedBox horizontal={10} />
        <TextInput
          style={props.styles.textInput}
          placeholder={"Search existing images..."}
          clearTextOnFocus={true}
          onFocus={() => props.setActive(true)}
          onBlur={() => props.setActive(false)}
          onChangeText={(text: string) => {
            props.setInput(text);
            // const filtered = text
            //   ? props.posts.filter(
            //       (item) =>
            //         item.prompt.toLowerCase().includes(text.toLowerCase()) ||
            //         item.prompt.toLowerCase().includes(text.toLowerCase())
            //     )
            //   : props.posts;
            // console.log(filtered);
            // props.setFilteredPosts(filtered);

            // props.setFilter(input)
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={props.styles.signInButton}
        onPress={() => {
          props.setPopup("in");
        }}
      >
        <Text style={{ color: "#5e5e5e", fontWeight: "500", fontSize: 18 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={props.styles.signUpButton}
        onPress={() => {
          props.setPopup("up");
        }}
      >
        <Text style={{ color: "#5e5e5e", fontWeight: "500", fontSize: 18 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
