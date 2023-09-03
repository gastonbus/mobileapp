import { StyleSheet, TextInput, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";


const AddItem = ({inputText, setInputText, onAddItem}) => {
	return (
		<View style={styles.addContainer}>
			<TextInput
				placeholder="Ingrese un producto... "
				style={styles.textInput}
				value={inputText}
				onChangeText={(text) => {
					setInputText(text);
				}}
			/>
			<Pressable style={styles.inputButton} onPress={onAddItem}>
				<AntDesign name="pluscircle" size={36} color="black" />
			</Pressable>
		</View>
	);
};

export default AddItem;

const styles = StyleSheet.create({
  addContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
	},
	textInput: {
		borderBottomWidth: 2,
		width: "75%",
		fontSize: 20,
		color: "#111111",
	},

});
