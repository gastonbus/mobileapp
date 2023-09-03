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
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
	const initialList = [
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

	const [inputText, setInputText] = useState("");

	const [list, setList] = useState(initialList);

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
			<Modal
				animationType="none"
				visible={isModalVisible}
				transparent={true}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setIsModalVisible(!isModalVisible);
				}}
			>
				<View style={styles.deleteAllItemsModalContainer}>
					<View style={styles.deleteAllItemsModal}>
						<Text style={styles.deleteAllItemsModalText}>
							¿Está seguro de querer eliminar todos los elementos de la lista?
						</Text>
						<View style={styles.modalButtonsContainer}>
							<Pressable
								style={styles.confirmDeleteAllItemsButton}
								onPress={() => setIsModalVisible(false)}
							>
								<Text style={styles.cancelDeleteAllItemsText}>Cancelar</Text>
							</Pressable>
							<Pressable
								style={styles.confirmDeleteAllItemsButton}
								onPress={() => onClearList()}
							>
								<Text style={styles.confirmDeleteAllItemsText}>OK</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.header}>
				<FontAwesome5 name="clipboard-list" size={48} color="black" />
				<Text style={styles.headerText}>Lista de compras</Text>
			</View>
			<View style={styles.body}>
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
				<View style={styles.listContainer}>
					<FlatList
						data={list}
						renderItem={({ item }) => (
							<View style={styles.listItem} key={item.id}>
								<Text style={styles.itemText}>{item.name}</Text>
								<Pressable
									style={styles.deleteItemButton}
									onPress={() => onDeleteItem(item.id)}
								>
									<AntDesign name="delete" size={24} color="gray" />
								</Pressable>
							</View>
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
	deleteAllItemsModalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "stretch",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
	},
	deleteAllItemsModal: {
		backgroundColor: "#444444",
		margin: 45,
		borderRadius: 20,
		padding: 15,
	},
	deleteAllItemsModalText: {
    margin: 5,
		fontSize: 20,
    color: "#dddddd",
	},
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  confirmDeleteAllItemsButton: {
    padding: 5,
  },
  cancelDeleteAllItemsText: {
    fontSize: 20,
    color: "#97d000",
  },
  confirmDeleteAllItemsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#97d000",
  },
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
	inputButton: {},
	listContainer: {
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
	},
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
