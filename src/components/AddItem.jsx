import { StyleSheet, TextInput, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AddItem = ({ inputText, setInputText, onAddItem }) => {
	return (
		<>
			<TextInput
				placeholder="Ingrese un producto... "
				style={styles.textInput}
				value={inputText}
				onChangeText={(text) => {
					setInputText(text);
				}}
			/>
			<Pressable onPress={onAddItem}>
				<AntDesign name="pluscircle" size={36} color="black" />
			</Pressable>
		</>
	);
};

export default AddItem;

const styles = StyleSheet.create({
	textInput: {
		borderBottomWidth: 2,
		width: "75%",
		fontSize: 20,
		color: "#111111",
	},
});
