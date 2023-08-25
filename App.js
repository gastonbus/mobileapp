import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de compras</Text>
      <View style={styles.addButton}>
        <TextInput placeholder="Escriba un texto... " style={styles.textInput} />
        <Pressable style={styles.inputButton} onPress={() => console.log('Add')}>
          <Text>AGREGAR</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

