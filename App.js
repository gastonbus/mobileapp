// import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import AddItem from "./src/components/AddItem";
import ListItem from "./src/components/ListItem";
import CustomModal from "./src/components/CustomModal";
import { testList } from "./src/helpers/fakeData";


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
				<View style={styles.addContainer}>
					<AddItem
						inputText={inputText}
						setInputText={setInputText}
						onAddItem={onAddItem}
					/>
				</View>
				<View style={styles.listContainer}>
					<FlatList
						data={list}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<ListItem item={item} onDeleteItem={onDeleteItem} />
						)}
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
					<Text style={styles.deleteAllButtonText}>Vaciar</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#97d000",
		paddingTop: 20,

	},
	headerText: {
		fontSize: 36,
	},
	body: {
		flex: 7,
		justifyContent: "flex-start",
		alignContent: "center",
	},
	addContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15,
	},
	listContainer: {
		flex:5,
		// marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		// paddingBottom: 20,
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
		fontSize: 18,
	},
	footer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#97d000",
		alignItems: "center",
	},
});
