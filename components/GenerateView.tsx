import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { ActivityIndicator } from "react-native";
import SizedBox from "./SizedBox";
import { useEffect, useState } from "react";
import supabase from "../Supabase";
import Styles from "../Styles";

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

const GenerateView = (props: { updateData: any }) => {
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const styles = Styles.GenerateViewStyle();

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
      <SafeAreaView style={styles.image}>
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
        style={styles.input}
        onChangeText={(text) => {
          setPrompt(text);
        }}
        clearTextOnFocus={true}
        autoCapitalize={"sentences"}
        placeholder={"Enter a prompt..."}
        multiline={true}
      />
      <SizedBox vertical={10} />
      <TouchableOpacity
        style={styles.generateButton}
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
        <Text style={styles.buttonText}>Generate Image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GenerateView;
