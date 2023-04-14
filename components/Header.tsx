import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import SizedBox from "./SizedBox";
import Icon from "@expo/vector-icons/FontAwesome5";
import SwitchWithIcons from "react-native-switch-with-icons";
import { User } from "@supabase/supabase-js";
import { useState } from "react";
import supabase from "../Supabase";

const Header = (props: {
  styles: any;
  setActive: any;
  setUserOnly: any;
  setUid: any;
  setInput: any;
  input: any;
  popup: any;
  setPopup: any;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [filterUser, setFilterUser] = useState(false);

  const fetchUser = async () => {
    const value = await (await supabase.auth.getUser()).data.user;
    setUser(value);
    props.setUid(value?.id);
  };
  fetchUser();

  const onValueChange = (value: boolean) => {
    setFilterUser(value);
    props.setUserOnly(value);
  };

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
      {!user ? (
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
      ) : null}
      {!user ? (
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
      ) : null}
      {user ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              color: "#a999e2",
              fontWeight: "500",
              fontSize: 15,
              padding: 10,
            }}
          >
            Only Show Your Posts
          </Text>
          <SwitchWithIcons value={filterUser} onValueChange={onValueChange} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Header;
