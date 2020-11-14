import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import Axios from "react-native-axios";
import { AuthContext } from "../../contexts/AuthContext";
const endpoint = "https://atsubbiano.it/api/news";
import HTML from "react-native-render-html";
import { globalStyles } from "../../assets/styles/global";
export default function App({ navigation }) {
  const [news, setNews] = useState([]);
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      Axios.get(endpoint)
        .then(({ data }) => {
          setNews(data);
          setLoading(false);
        })
        .catch((err) => {
          alert("Errore nel recupero delle notizie");
          setLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.subContainer}>
        {news.map((news) => {
          return (
            <View key={news.id} style={styles.news}>
              <Text style={styles.heading}>{news.title}</Text>
              <HTML
                style={styles.introtext}
                html={news.introtext}
                tagsStyles={{
                  img: { marginBottom: 5 },
                  p: { marginBottom: 5 },
                }}
                imagesMaxWidth={Dimensions.get("window").width - 20}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  news: {
    overflow: "hidden",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000259",
  },
  heading: {
    marginBottom: 5,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    textAlign: "left",
    fontWeight: "bold",
  },
  introtext: {
    paddingBottom: 10,
  },
});
