import {View, Text} from "react-native";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sobre</Text>
      <Text style={{ marginTop: 16, textAlign: "center" }}>
        Este é um aplicativo para ajudar a encontrar rotas para igrejas.
      </Text>
    </View>
  );
}
