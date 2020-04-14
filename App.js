import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "MY STORY1",
        },
        {
          title: "MY STORY2",
        },
        {
          title: "MY STORY3",
        },
        {
          title: "MY STORY4",
        },
        {
          title: "MY STORY5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={styles.logo} source={require("./assets/baby.jpg")} />

        <Text style={{ color: "black" }}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Carousel
            ref={(ref) => (this.Carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={550}
            itemWidth={550}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 500,
    width: 500,
  },
  logo1: {
    height: 20,
    width: 20,
  },
  logo2: {
    height: 20,
    width: 20,
  },
});
