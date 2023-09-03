import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({ item, onDeleteItem }) => {
	return (
		<View style={styles.listItem} key={item.id}>
			<Text style={styles.itemText}>{item.name}</Text>
			<Pressable
				style={styles.deleteItemButton}
				onPress={() => onDeleteItem(item.id)}
			>
				<AntDesign name="delete" size={24} color="gray" />
			</Pressable>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},
	itemText: {
		fontSize: 16,
	},
	deleteItemButton: {
		marginRight: 6,
	},
});
