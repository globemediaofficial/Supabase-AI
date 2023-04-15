import { TouchableOpacity, View, Text, TextInput } from "react-native";
import Styles from "../Styles";
import Icon from "@expo/vector-icons/FontAwesome5";
import SizedBox from "./SizedBox";
import { useState } from "react";
import supabase from "../Supabase";

const authenticate = async (
  email: string,
  password: string,
  newUser: boolean
) => {
  if (!newUser) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  } else {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  }
};

const AuthPopup = (props: { setPopup: any; popup: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AuthStyle = Styles.AuthStyle();

  return (
    <View style={AuthStyle.main}>
      <View style={AuthStyle.background}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.setPopup("");
            }}
          >
            <Icon
              name={"times"}
              size={25}
              style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 80 }}
              color={AuthStyle.icon.color}
            />
          </TouchableOpacity>
        </View>
        <Text style={AuthStyle.title}>
          Welcome{props.popup == "in" ? " Back" : ""}!
        </Text>
        <Text style={AuthStyle.subtitle}>
          By signing {props.popup} you can keep track of your designs.
        </Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder={"Email..."}
            keyboardType={"email-address"}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={AuthStyle.input}
          ></TextInput>
          <SizedBox vertical={5} />
          <TextInput
            placeholder={"Password..."}
            secureTextEntry={true}
            onChangeText={(input) => {
              setPassword(input);
            }}
            style={AuthStyle.input}
          ></TextInput>
          <SizedBox vertical={5} />
          <View style={{ paddingTop: 5, paddingRight: 5 }}>
            <TouchableOpacity
              // style={props.styles.signUpButton}
              onPress={() => {
                if (props.popup == "in") {
                  props.setPopup("up");
                } else {
                  props.setPopup("in");
                }
              }}
            >
              <Text style={AuthStyle.switch}>
                {props.popup == "in"
                  ? "New? Create an account."
                  : "Already have an account? Sign In."}
              </Text>
            </TouchableOpacity>
          </View>
          <SizedBox vertical={10} />
          <TouchableOpacity
            style={AuthStyle.submitButton}
            onPress={() => {
              authenticate(email, password, props.popup == "up");
              props.setPopup("");
            }}
          >
            <Text style={AuthStyle.submitText}>Submit</Text>
          </TouchableOpacity>
          <SizedBox vertical={15} />
        </View>
      </View>
    </View>
  );
};

export default AuthPopup;
