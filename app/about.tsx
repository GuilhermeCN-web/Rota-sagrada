import {View, Text, ScrollView, TouchableOpacity, Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function About() {
  return (
    <ScrollView style={{ backgroundColor: "#F5F0E6", height: "100%" }}>
      <View
        style={{
          padding: 15,
          backgroundColor: "#FFC03F",
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <Ionicons
          name="location-outline"
          size={32}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontFamily: "Palaquin",
            fontSize: 36,
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
            marginRight: 32,
          }}
        >
          Rota Sagrada
        </Text>
      </View>
      <Text style={{ marginTop: 56, marginLeft: 5, fontSize: 24, fontWeight: "bold" }}>
        Itu: Terra de fé e história
      </Text>
      <Text style={{ marginTop: 16, marginLeft: 5, textAlign: "left" }}>
        Mais do que símbolos gigantes, Itu é conhecida como a Roma Brasileira por suas igrejas históricas, ricas em arte, fé e tradição.
        Descubra templos centenários como a Matriz da Candelária, o Santuário do Bom Jesus e a Igreja do Carmo. Cada um guarda histórias que marcaram o Brasil.
        Explore nossos roteiros e conheça o lado mais espiritual e cultural de Itu!
      </Text>
      <Text style={{ marginTop: 16, marginLeft: 5, textAlign: "left" }}>
        Descubra templos centenários como a Matriz da Candelária, o Santuário do Bom Jesus e a Igreja do Carmo. Cada um guarda histórias que marcaram o Brasil.
        Explore nossos roteiros e conheça o lado mais espiritual e cultural de Itu!
      </Text>
      <View style={{ height: 1, backgroundColor: "#FFC03F", margin: 5 }}></View>
      <View 
  style={{ 
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 5
  }}
>
  {/* Card azul */}
  <View
    style={{ 
      backgroundColor: "#A6C6DA", 
      borderRadius: 15, 
      width: "50%", 
      padding: 5 
    }}
  >
    <Text style={{ margin: 5, fontSize: 12, fontWeight: "bold" }}>
      Pontos de parada:
    </Text>

    <View style={{ flexDirection: "row", marginBottom: 15 }}>
      <Text style={{ fontSize: 12 }}>•</Text>
      <Text style={{ fontSize: 10 }}>
        Igrejas Nosso Senhor do Horto/São Lázaro (capela e monumento em tributo à Padre Bento) – Rua José Balduíno do Amaral Gurgel, s/nº – Vila Padre Bento;
      </Text>
    </View>

    <View style={{ flexDirection: "row", marginBottom: 15 }}>
      <Text style={{ fontSize: 12 }}>•</Text>
      <Text style={{ fontSize: 10 }}>
        Nossa Senhora do Carmo (memorial em tributo a Dom Gabriel) – Praça da Independência (Carmo);
      </Text>
    </View>

    <View style={{ flexDirection: "row", /*marginBottom: 15*/ }}>
      <Text style={{ fontSize: 12 }}>•</Text>
      <Text style={{ fontSize: 10 }}>
        Nossa Senhora do Patrocínio (relíquia e túmulo de Madre Theodora Voiron) – Praça Regente Feijó, 172, Centro;
      </Text>
    </View>

    {/* Botão centralizado */}
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity 
        style={{ 
          marginTop: 8, 
          backgroundColor: "#FFC03F", 
          borderRadius: 10, 
          padding: 5, 
          width: "50%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5, 
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 10 }}>
          Ver mais
        </Text>
      </TouchableOpacity>
    </View>
  </View>

  {/* Imagens alinhadas à direita */}
  <View 
    style={{ 
      flex: 1, 
      flexDirection: "row", 
      flexWrap: "wrap", 
      justifyContent: "flex-end",
    }}
  >
    <Image 
      source={require("../assets/images/igreja 1.webp")}
      style={{ width: "42%", height: 130, margin: 5 }}
    />
    <Image 
      source={require("../assets/images/igreja 2.webp")}
      style={{ width: "42%", height: 130, margin: 5 }}
    />
    <Image 
      source={require("../assets/images/igreja 3.webp")} 
      style={{ width: "42%", height: 130, margin: 5 }}
    />
    <Image 
      source={require("../assets/images/igreja 4.webp")}
      style={{ width: "42%", height: 130, margin: 5 }}
    />
  </View>
</View>
      <View
      style={{
        padding: 15,
        backgroundColor: "#FFC03F",
        height: 70,
        marginTop: "auto",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          marginLeft: "20%", alignItems: "center",
        }}
      >
      <Link href="/">
      <Ionicons name="location-sharp" size={24} color="#555555" />
      </Link>
      <Text style={{ color: "black" }}>Rotas</Text>
      </View>
      <View
        style={{
          marginRight: "20%", alignItems: "center",
        }}
      >
      <Link href="/about">
      <Ionicons name="information-circle-sharp" size={24} color="#555555" />
      </Link>
      <Text style={{ color: "black" }}>Sobre</Text>
      </View>
    </View>
    </ScrollView>
  );
}
