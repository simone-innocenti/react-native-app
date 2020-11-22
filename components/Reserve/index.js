import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import Axios from "react-native-axios";
import { AuthContext } from "../../contexts/AuthContext";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const endpoint = "https://atsubbiano.it/api/campi";

export default function App({ navigation }) {
  const [calendario, setCalendario] = useState([]);
  const [giorni, setGiorni] = useState([]);
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      Axios.get(endpoint)
        .then(({ data }) => {
          const { campi, days } = data;
          setCalendario(campi);
          setGiorni(days);
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
      {calendario.length && giorni.length ? (
        <Cal campi={calendario} days={giorni} />
      ) : null}
    </ScrollView>
  );
}

const Cal = ({ campi, days }) => {
  const [daySelected, setDaySelected] = useState(0);
  //const [touse, setTouse] = useState(days[0]);
  //console.log(touse);
  return (
    <View>
      <DropDownPicker
        items={days.map((day, index) => {
          return { label: day, value: index };
        })}
        containerStyle={{ marginBottom: 0 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "center",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        defaultValue={daySelected}
        onChangeItem={(item) => setDaySelected(item.value)}
        labelStyle={{
          textAlign: "center",
          fontSize: 20,
        }}
      />

      <View style={styles.calendario}>
        {campi.map((listaCampi) => {
          const { title, timing, idCampo, slots } = listaCampi;

          const keys = Object.keys(slots);
          const name = title.split(" - ");
          return (
            <View key={idCampo} style={styles.campo}>
              <Text style={styles.nome}>
                {name[0]}
                {"\n"}
                {name[1]}
              </Text>
              {keys.map((day, i) => {
                if (i != daySelected) {
                  return;
                }
                const dayData = slots[day];
                return dayData.map((d) => {
                  const k = `${idCampo}.${day}.${d.formattedHour}`;

                  const cls = d.canReserve ? "green" : "red";

                  return (
                    <View key={k}>
                      <TouchableOpacity
                        onPress={() => {
                          if (d.canReserve) {
                            Alert.alert(
                              `Prenota campo ${idCampo}`,
                              `alle ${d.formattedHour} del ${day}`
                            );
                          } else {
                            Alert.alert(
                              `Campo ${idCampo} non prenotabile`,
                              `alle ${d.formattedHour} del ${day}`
                            );
                            return false;
                          }
                        }}
                      >
                        <Text
                          style={{
                            ...styles.fascia,
                            backgroundColor: d.canReserve ? "green" : "red",
                          }}
                        >
                          {d.formattedHour}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                });
              })}
            </View>
          );
        })}
      </View>
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

    backgroundColor: "#000",
    color: "#FFF",
  },
  fascia: {
    textAlign: "center",
    padding: 9,
    backgroundColor: "green",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    color: "#FFF",
  },
});
