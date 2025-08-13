import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={{ backgroundColor: "#F5F0E6", height: "100%" }}>
      <View
        style={{
          padding: 15,
          backgroundColor: "#FFC03F",
          flexDirection: "row",
          alignItems: "center",
          height: 70,
        }}
      >
        <Ionicons
          name="location"
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
      <View
        style={{
          backgroundColor: "#A6C6DA",
          margin: 10,
          alignItems: "center",
          borderRadius: 50,
          height: 50,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Ionicons 
          name="menu"
          size={24}
          color="#262E34"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <TextInput
          placeholder="Pesquise uma igreja específica"
          placeholderTextColor={"#262E34"}
          style={{
            flex: 1,
            color: "black",
            fontSize: 18,
          }}
        />
        <Ionicons 
          name="search"
          size={24}
          color="#262E34"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
      </View>
      <Image
        source={require("../assets/images/rotas1.webp")}
        style={{ 
          width: "90%", 
          height: 250, 
          margin: 10, 
          alignSelf: "center",
        }}
      />
      <TouchableOpacity
      style={{
        backgroundColor: "#FFC03F", // amarelo
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // sombra no Android
      }}
      onPress={() => console.log("Botão clicado")}
    >
      <Ionicons name="location" size={24} color="black" style={{ marginRight: 8 }} />
      <Text style={{ fontSize: 20, color: "black" }}>Gerar Rota</Text>
    </TouchableOpacity>
    </View>
  );
}
