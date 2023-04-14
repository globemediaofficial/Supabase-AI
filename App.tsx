import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import SizedBox from "./components/SizedBox";
import GridView from "./components/GridView";
import Header from "./components/Header";
import AuthPopup from "./components/AuthPopup";
import GenerateView from "./components/GenerateView";
import Post from "./objects/Post";
import supabase from "./Supabase";

const imageArr = [
  new Post({
    uid: "",
    postId: "12345",
    imageUrl:
      "https://media.architecturaldigest.com/photos/569992ccc6772b76145675a2/16:9/w_2580,c_limit/retreat-the-modern-house-in-nature-01.jpg",
    prompt: "mhmmmm",
    createdAt: "now",
  }),
  new Post({
    uid: "",
    postId: "12345",
    imageUrl:
      "https://www.mymove.com/wp-content/uploads/2020/07/shutterstock_1186954054-1-1.jpg",
    prompt: "SLAY",
    createdAt: "now",
  }),
  new Post({
    uid: "",
    postId: "12345",
    imageUrl:
      "https://cdn.homedit.com/wp-content/uploads/2021/11/Modern-Mansion.jpg",
    prompt: "PERIOD",
    createdAt: "now",
  }),
];

const fetchPosts = async (setPosts: any) => {
  const posts: Post[] = (
    await supabase
      .from("Posts")
      .select()
      .order("createdAt", { ascending: false })
  ).data?.map((post: any) => new Post(post))!;

  setPosts(posts);
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [hover, setHover] = useState("");
  const [isActive, setActive] = useState(false);
  const [userOnly, setUserOnly] = useState(false);
  const [uid, setUid] = useState("");
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState("");

  async function fetchData() {
    await fetchPosts(setPosts);
    const filteredInput = input
      ? posts.filter(
          (item) =>
            item.prompt.toLowerCase().includes(input.toLowerCase()) ||
            item.prompt.toLowerCase().includes(input.toLowerCase())
        )
      : posts;
    const filteredUser = userOnly
      ? filteredInput.filter((item) => item.uid == uid)
      : filteredInput;
    setFilteredPosts(filteredUser);
  }
  fetchData();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c1c1c",
    },
    top: {
      height: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#1c1c1c",
      borderBottomColor: "#5e5e5e",
      borderBottomWidth: 1,
      position: "absolute",
      top: 5,
    },
    header: {
      height: 50,
      width: "70%",
      padding: 15,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: isActive ? "#a1a1a1" : "#5e5e5e",
      backgroundColor: "#a1a1a1" + "33",
      flexDirection: "row",
      alignItems: "center",
    },
    textInput: {
      height: 30,
      width: "100%",
      borderBottomWidth: 1,
      borderColor: isActive ? "#a999e2" : "#a1a1a1",
      color: "#a1a1a1",
    },
    signInButton: {
      height: 50,
      width: 120,
      padding: 5,
      backgroundColor: "#a999e2",
      borderWidth: 1,
      borderColor: "#5e5e5e",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    signUpButton: {
      height: 50,
      width: 120,
      padding: 5,
      backgroundColor: "#a1a1a1",
      borderWidth: 1,
      borderColor: "#5e5e5e",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    filterButton: {
      height: 50,
      width: 240,
      padding: 5,
      backgroundColor: "#a1a1a1" + "33",
      borderWidth: 1,
      borderColor: "#5e5e5e",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    popupButton: {
      height: 40,
      width: 80,
      padding: 5,
      backgroundColor: "#5e5e5e",
      borderWidth: 1,
      borderColor: "#a1a1a1",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    generateButton: {
      height: 50,
      width: 150,
      padding: 5,
      backgroundColor: "#a999e2",
      borderWidth: 1,
      borderColor: "#5e5e5e",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    content: {
      paddingTop: 55,
      flexDirection: "row",
      alignContent: "space-around",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    text: {
      color: "#a1a1a1",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <SizedBox vertical={5} />
      <SafeAreaView style={styles.content}>
        <GridView posts={filteredPosts} hover={hover} setHover={setHover} />
        <GenerateView styles={styles} updateData={fetchPosts(setPosts)} />
      </SafeAreaView>
      <Header
        styles={styles}
        setActive={setActive}
        setUserOnly={setUserOnly}
        setUid={setUid}
        setInput={setInput}
        input={input}
        popup={popup}
        setPopup={setPopup}
      />
      <SizedBox vertical={5} />
      <StatusBar style="auto" />
      {popup !== "" && (
        <AuthPopup setPopup={setPopup} popup={popup} styles={styles} />
      )}
    </SafeAreaView>
  );
}
