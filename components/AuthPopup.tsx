import { TouchableOpacity, View, Text, TextInput } from "react-native";
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

const AuthPopup = (props: { setPopup: any; popup: any; styles: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#a1a1a1" + "50",
        position: "absolute",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "50%",
          width: "50%",
          backgroundColor: "#1c1c1c",
          borderRadius: 15,
        }}
      >
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
              color={"#a1a1a1"}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            height: "100%",
            width: "100%",
            paddingTop: 10,
            textAlign: "center",
            textAlignVertical: "center",
            color: "#a999e2",
            fontSize: 25,
          }}
        >
          Welcome{props.popup == "in" ? " Back" : ""}!
        </Text>
        <Text
          style={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            textAlignVertical: "center",
            color: "#5e5e5e",
            fontSize: 15,
          }}
        >
          By signing {props.popup} you can keep track of your designs.
        </Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder={"Email..."}
            keyboardType={"email-address"}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={{
              height: 50,
              width: "70%",
              paddingLeft: 10,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#a1a1a1",
              color: "#a1a1a1",
            }}
          ></TextInput>
          <SizedBox vertical={5} />
          <TextInput
            placeholder={"Password..."}
            secureTextEntry={true}
            onChangeText={(input) => {
              setPassword(input);
            }}
            style={{
              height: 50,
              width: "70%",
              paddingLeft: 10,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#a1a1a1",
              color: "#a1a1a1",
            }}
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
              <Text
                style={{ color: "#a1a1a1", fontWeight: "500", fontSize: 15 }}
              >
                {props.popup == "in"
                  ? "New? Create an account."
                  : "Already have an account? Sign In."}
              </Text>
            </TouchableOpacity>
          </View>
          <SizedBox vertical={10} />
          <TouchableOpacity
            style={props.styles.signInButton}
            onPress={() => {
              authenticate(email, password, props.popup == "up");
              props.setPopup("");
            }}
          >
            <Text style={{ color: "#5e5e5e", fontWeight: "500", fontSize: 15 }}>
              Submit
            </Text>
          </TouchableOpacity>
          <SizedBox vertical={15} />
        </View>
      </View>
    </View>
  );
};

export default AuthPopup;
