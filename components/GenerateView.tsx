import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { ActivityIndicator } from "react-native";
const { Configuration, OpenAIApi } = require("openai");
import SizedBox from "./SizedBox";
import { useEffect, useState } from "react";
import supabase from "../Supabase";
import Post from "../objects/Post";

const generateImage = async (text: any) => {
  try {
    const response = await fetch(
      "https://wittycomplexcrash.christopherm254.repl.co/generate-image",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );
    const data = await response.json();
    console.log(data.imageUrl);
    return data.imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const GenerateView = (props: { styles: any; updateData: any }) => {
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(url);
    setUrl(url);
  }, [url]);

  return (
    <SafeAreaView
      style={{
        width: "35%",
        paddingTop: 20,
        alignItems: "center",
      }}
    >
      <SafeAreaView
        style={{
          width: "90%",
          aspectRatio: 1,
          borderRadius: 15,
          backgroundColor: "#a1a1a1" + "33",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!loading && !url && (
          <Icon name={"image"} size={200} color={"#1c1c1c"} />
        )}
        {url ? (
          <Image
            source={{ uri: url }}
            style={{ height: "90%", aspectRatio: 1, borderRadius: 15 }}
          />
        ) : null}
        {loading && (
          <ActivityIndicator
            color="#1c1c1c"
            size={50}
            style={{ position: "absolute" }}
          ></ActivityIndicator>
        )}
      </SafeAreaView>
      <SizedBox vertical={10} />
      <TextInput
        style={{
          height: 150,
          width: "90%",
          padding: 15,
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#a1a1a1" + "33",
          fontSize: 18,
          color: "#a1a1a1",
        }}
        onChangeText={(text) => {
          setPrompt(text);
        }}
        clearTextOnFocus={true}
        // onSubmitEditing={() => generatedUrl(setUrl, setLoading, prompt)}
        autoCapitalize={"sentences"}
        placeholder={"Enter a prompt..."}
        multiline={true}
      />
      <SizedBox vertical={10} />
      <TouchableOpacity
        style={props.styles.generateButton}
        onPress={async () => {
          setLoading(true);
          const url = await generateImage(prompt);
          console.log(url);
          setUrl(url);

          const uid = (await supabase.auth.getUser()).data.user?.id;

          try {
            const postId = `${Date.now()}-${Math.floor(
              Math.random() * 100000
            )}`;
            const post = {
              postId: postId,
              uid: uid ?? "",
              imageUrl: url,
              prompt: prompt,
            };

            console.log("Inserting post...");
            const { error: insertError } = await supabase
              .from("Posts")
              .insert(post);

            if (insertError) {
              throw new Error(`Failed to insert post: ${insertError.message}`);
            }

            console.log("Post inserted successfully:", post);
          } catch (error) {
            console.log("Error:", error);
          }

          props.updateData;
          setLoading(false);
        }}
      >
        <Text style={{ color: "#5e5e5e", fontWeight: "500", fontSize: 15 }}>
          Generate Image
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GenerateView;
