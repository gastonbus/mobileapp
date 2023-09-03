import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import AddItem from "./src/components/AddItem";
import ListItem from "./src/components/ListItem";
import CustomModal from "./src/components/CustomModal";

const testList = [
	{
		id: 1,
		name: "Fideos",
	},
	{
		id: 2,
		name: "Gaseosas",
	},
	{
		id: 3,
		name: "Manteca",
	},
];

export default function App() {
	const [inputText, setInputText] = useState("");

	const [list, setList] = useState(testList);

	const [isModalVisible, setIsModalVisible] = useState(false);

	const onAddItem = () => {
		setList([
			...list,
			{
				id: new Date().getTime() + inputText,
				name: inputText,
			},
		]);
		setInputText("");
	};

	const onDeleteItem = (id) => {
		setList(list.filter((item) => item.id !== id));
	};

	const onClearList = () => {
		setList([]);
		setIsModalVisible(false);
	};

	return (
		<View style={styles.container}>
			{/* <StatusBar style="auto" /> */}
			<CustomModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				onClearList={onClearList}
			/>
			<View style={styles.header}>
				<FontAwesome5 name="clipboard-list" size={48} color="black" />
				<Text style={styles.headerText}>Lista de compras</Text>
			</View>
			<View style={styles.body}>
				<AddItem
					inputText={inputText}
					setInputText={setInputText}
					onAddItem={onAddItem}
				/>
				<View style={styles.listContainer}>
					<FlatList
						data={list}
						renderItem={({ item }) => (
							<ListItem item={item} onDeleteItem={onDeleteItem} />
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
			<View style={styles.footer}>
				<TouchableHighlight
					style={styles.deleteAllButton}
					activeOpacity={0.6}
					underlayColor="#DDDDDD"
					onPress={() => setIsModalVisible(true)}
				>
					<Text style={styles.deleteAllButtonText}>Limpiar</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "space-between",
	},
	header: {
		flex: 0.2,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#97d000",
		paddingTop: 10,
		paddingBottom: 10,
		width: "100%",
	},
	headerText: {
		fontSize: 36,
	},
	body: {
		flex: 0.85,
		justifyContent: "flex-start",
		alignContent: "center",
	},
	inputButton: {},
	listContainer: {
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
	},
	deleteAllButton: {
		backgroundColor: "#ffcc00",
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 25,
	},
	deleteAllButtonText: {
		fontSize: 20,
	},
	footer: {
		flex: 0.15,
		justifyContent: "center",
		backgroundColor: "#97d000",
		alignItems: "center",
	},
});
