import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Axios from "react-native-axios";

import { AuthContext } from "../../contexts/AuthContext";

const endpoint = "https://atsubbiano.it/api/campi";

export default function App({ navigation }) {
  const [calendario, setCalendario] = useState([]);
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      Axios.get(endpoint)
        .then(({ data }) => {
          setCalendario(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("error");
          setLoading(false);
        });
    };

    getData();
  }, []);

  return (
    <ScrollView>
      {calendario.length ? <Cal campi={calendario} /> : <Text>Loading...</Text>}
    </ScrollView>
  );
}

const Cal = ({ campi }) => {
  return (
    <View style={styles.calendario}>
      {campi.map((listaCampi) => {
        const { title, timing, idCampo, slots } = listaCampi;

        const keys = Object.keys(slots);

        return (
          <View key={idCampo} style={styles.campo}>
            <Text style={styles.nome}>{title}</Text>
            {keys.map((day) => {
              const dayData = slots[day];
              return dayData.map((d) => {
                const k = `${idCampo}.${day}.${d.formattedHour}`;

                const cls = d.canReserve ? "green" : "red";

                return (
                  <View key={k}>
                    <Text
                      style={{
                        ...styles.fascia,
                        backgroundColor: d.canReserve ? "green" : "red",
                      }}
                    >
                      {d.formattedHour}
                    </Text>
                  </View>
                );
              });
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  calendario: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRightColor: "#FFF",
    borderRightWidth: 1,
  },
  campo: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    textAlign: "center",
    borderLeftColor: "#FFF",
    borderLeftWidth: 1,
  },
  nome: {
    height: 40,
    textAlign: "center",
  },
  fascia: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "green",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    color: "#FFF",
  },
});
