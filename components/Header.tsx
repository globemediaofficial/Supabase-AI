import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Styles from "../Styles";
import SizedBox from "./SizedBox";
import Icon from "@expo/vector-icons/FontAwesome5";
import SwitchWithIcons from "react-native-switch-with-icons";
import { User } from "@supabase/supabase-js";
import { useState } from "react";
import supabase from "../Supabase";

const Header = (props: {
  setUserOnly: any;
  setUid: any;
  setInput: any;
  input: any;
  popup: any;
  setPopup: any;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [filterUser, setFilterUser] = useState(false);
  const [isActive, setActive] = useState(false);

  const styles = Styles.HeaderStyle(isActive, filterUser);

  const fetchUser = async () => {
    const value = (await supabase.auth.getUser()).data.user;
    setUser(value);
    props.setUid(value?.id);
  };
  fetchUser();

  const onValueChange = (value: boolean) => {
    setFilterUser(value);
    props.setUserOnly(value);
  };

  return (
    <SafeAreaView style={styles.top}>
      <View style={styles.header}>
        <Icon name={"search"} size={20} color={"#a999e2"} />
        <SizedBox horizontal={10} />
        <TextInput
          style={styles.textInput}
          placeholder={"Search existing images..."}
          clearTextOnFocus={true}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChangeText={(text: string) => {
            props.setInput(text);
          }}
        ></TextInput>
      </View>
      {!user ? (
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            props.setPopup("in");
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      ) : null}
      {!user ? (
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            props.setPopup("up");
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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
          <TouchableOpacity
            onPress={() => {
              onValueChange(!filterUser);
            }}
          >
            <Text style={styles.filterText}>Only Show Your Posts</Text>
          </TouchableOpacity>
          {/* <SwitchWithIcons value={filterUser} onValueChange={onValueChange} /> */}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Header;
