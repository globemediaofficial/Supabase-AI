import {
  Appearance,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from "react-native";

const AppStyle = () => {
  const colorScheme = useColorScheme() || Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";

  const backgroundColor = isDarkMode ? "#1c1c1c" : "#ffffff";
  const borderColor = isDarkMode ? "#a1a1a1" : "#000000";
  const textColor = isDarkMode ? "#a1a1a1" : "#000000";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
    textInput: {
      height: 30,
      width: "100%",
      padding: 5,
      borderBottomWidth: 1,
      borderColor: borderColor,
      color: textColor,
    },
    content: {
      paddingTop: 55,
      flexDirection: "row",
      alignContent: "space-around",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    text: {
      color: textColor,
    },
  });

  return styles;
};

const AuthStyle = () => {
  const colorScheme =
    useColorScheme() || Appearance.getColorScheme() || "light";
  const isDarkMode = colorScheme === "dark";

  const mainBackgroundColor = isDarkMode ? "#1c1c1c" : "#a1a1a1" + "50";
  const backgroundBackgroundColor = isDarkMode ? "#1c1c1c" : "#a1a1a1";
  const iconColor = isDarkMode ? "#a1a1a1" : "#1c1c1c";
  const titleColor = isDarkMode ? "#a999e2" : "#a1a1a1";
  const subtitleColor = isDarkMode ? "#5e5e5e" : "#a1a1a1";
  const inputColor = isDarkMode ? "#a1a1a1" : "#1c1c1c";
  const inputBorderColor = isDarkMode ? "#a1a1a1" : "#5e5e5e";
  const submitButtonBackgroundColor = isDarkMode ? "#a999e2" : "#1c1c1c";
  const submitButtonBorderColor = isDarkMode ? "#5e5e5e" : "#a999e2";
  const submitTextColor = isDarkMode ? "#1c1c1c" : "#5e5e5e";

  const styles = StyleSheet.create({
    main: {
      width: "100%",
      height: "100%",
      backgroundColor: mainBackgroundColor,
      position: "absolute",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    background: {
      height: "50%",
      width: "50%",
      backgroundColor: backgroundBackgroundColor,
      borderRadius: 15,
    },
    icon: {
      color: iconColor,
    },
    title: {
      height: "100%",
      width: "100%",
      paddingTop: 10,
      textAlign: "center",
      textAlignVertical: "center",
      color: titleColor,
      fontSize: 25,
    },
    subtitle: {
      height: "100%",
      width: "100%",
      textAlign: "center",
      textAlignVertical: "center",
      color: subtitleColor,
      fontSize: 15,
    },
    input: {
      height: 50,
      width: "70%",
      paddingLeft: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: inputBorderColor,
      color: inputColor,
    },
    switch: { color: iconColor, fontWeight: "500", fontSize: 15 },
    submitButton: {
      height: 50,
      width: 120,
      padding: 5,
      backgroundColor: submitButtonBackgroundColor,
      borderWidth: 1,
      borderColor: submitButtonBorderColor,
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    submitText: { color: submitTextColor, fontWeight: "500", fontSize: 15 },
  });

  return styles;
};

const HeaderStyle = (active: boolean, filterUser: boolean) => {
  const colorScheme =
    useColorScheme() || Appearance.getColorScheme() || "light";
  const isDarkMode = colorScheme === "dark";

  const topBackgroundColor = isDarkMode ? "#1c1c1c" : "#ffffff";
  const topBorderColor = isDarkMode ? "#5e5e5e" : "#000000";
  const headerBorderColor = active
    ? isDarkMode
      ? "#a1a1a1"
      : "#5e5e5e"
    : isDarkMode
    ? "#5e5e5e"
    : "#a1a1a1";
  const headerBackgroundColor = isDarkMode
    ? "#a1a1a1" + "33"
    : "#ffffff" + "33";
  const textInputBorderColor = active
    ? isDarkMode
      ? "#a999e2"
      : "#000000"
    : isDarkMode
    ? "#a1a1a1"
    : "#a1a1a1";
  const signInButtonBackgroundColor = active
    ? isDarkMode
      ? "#a999e2"
      : "#a1a1a1"
    : isDarkMode
    ? "#ffffff"
    : "#000000";
  const signUpButtonBackgroundColor = isDarkMode ? "#a1a1a1" : "#ffffff";
  const filterButtonBackgroundColor = isDarkMode
    ? "#a1a1a1" + "33"
    : "#ffffff" + "33";
  const buttonTextTextColor = isDarkMode ? "#ffffff" : "#000000";
  const filterTextTextColor = filterUser ? "#a999e2" : "#5e5e5e";

  const styles = StyleSheet.create({
    top: {
      height: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: topBackgroundColor,
      borderBottomColor: topBorderColor,
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
      borderColor: headerBorderColor,
      backgroundColor: headerBackgroundColor,
      flexDirection: "row",
      alignItems: "center",
    },
    textInput: {
      height: 30,
      width: "100%",
      padding: 5,
      borderBottomWidth: 1,
      borderColor: textInputBorderColor,
      color: isDarkMode ? "#a1a1a1" : "#000000",
    },
    signInButton: {
      height: 50,
      width: 120,
      padding: 5,
      backgroundColor: signInButtonBackgroundColor,
      borderWidth: 1,
      borderColor: isDarkMode ? "#5e5e5e" : "#000000",
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
      backgroundColor: signUpButtonBackgroundColor,
      borderWidth: 1,
      borderColor: isDarkMode ? "#5e5e5e" : "#000000",
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
      backgroundColor: filterButtonBackgroundColor,
      borderWidth: 1,
      borderColor: isDarkMode ? "#5e5e5e" : "#000000",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: buttonTextTextColor,
      fontWeight: "500",
      fontSize: 18,
    },
    filterText: {
      color: filterTextTextColor,
      fontWeight: "500",
      fontSize: 15,
      padding: 10,
    },
  });
  return styles;
};

const GenerateViewStyle = () => {
  const colorScheme =
    useColorScheme() || Appearance.getColorScheme() || "light";
  const isDarkMode = colorScheme === "dark";

  const backgroundColor = isDarkMode ? "#5e5e5e" : "#5e5e5e";
  const borderColor = isDarkMode ? "#a1a1a1" : "#000000";
  const textColor = isDarkMode ? "#a1a1a1" : "#000000";

  const styles = StyleSheet.create({
    image: {
      width: "90%",
      aspectRatio: 1,
      borderRadius: 15,
      backgroundColor: `${backgroundColor}33`,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 150,
      width: "90%",
      padding: 15,
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 15,
      borderColor: `${borderColor}33`,
      fontSize: 18,
      color: textColor,
    },
    generateButton: {
      height: 50,
      width: 150,
      padding: 5,
      backgroundColor: isDarkMode ? "#a999e2" : "#5e5e5e",
      borderWidth: 1,
      borderColor: isDarkMode ? "#5e5e5e" : "#a1a1a1",
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: isDarkMode ? "#5e5e5e" : "#a1a1a1",
      fontWeight: "500",
      fontSize: 15,
    },
  });

  return styles;
};

const GridItemStyle = (hover: boolean) =>
  StyleSheet.create({
    shadow: {
      borderRadius: 15,
      shadowColor: "#5e5e5e",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    opacity: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: hover ? "#a1a1a1" + "80" : undefined,
      borderRadius: 15,
      overflow: "hidden",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default {
  AppStyle,
  AuthStyle,
  HeaderStyle,
  GenerateViewStyle,
  GridItemStyle,
};
