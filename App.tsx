import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import Styles from "./Styles";
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
  const [userOnly, setUserOnly] = useState(false);
  const [uid, setUid] = useState("");
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState("");

  const styles = Styles.AppStyle();

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

  return (
    <SafeAreaView style={styles.container}>
      <SizedBox vertical={5} />
      <SafeAreaView style={styles.content}>
        <GridView posts={filteredPosts} hover={hover} setHover={setHover} />
        <GenerateView updateData={fetchPosts(setPosts)} />
      </SafeAreaView>
      <Header
        setUserOnly={setUserOnly}
        setUid={setUid}
        setInput={setInput}
        input={input}
        popup={popup}
        setPopup={setPopup}
      />
      <SizedBox vertical={5} />
      <StatusBar style="auto" />
      {popup !== "" && <AuthPopup setPopup={setPopup} popup={popup} />}
    </SafeAreaView>
  );
}
