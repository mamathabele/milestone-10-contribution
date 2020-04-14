import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/baby.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    height: 120,
    width: 120,
  },
});
