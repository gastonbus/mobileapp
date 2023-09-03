import { StatusBar } from "expo-status-bar";
import {
	Button,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
	return (
		<View style={styles.container}>
			{/* <StatusBar style="auto" /> */}
			<View style={styles.header}>
				<FontAwesome5 name="clipboard-list" size={48} color="black" />
				<Text style={styles.headerText}>Lista de compras</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.addContainer}>
					<TextInput
						placeholder="Ingrese un producto... "
						style={styles.textInput}
					/>
					<Pressable
						style={styles.inputButton}
						onPress={() => console.log(new Date().getTime())}
					>
						<AntDesign name="pluscircle" size={36} color="black" />
					</Pressable>
				</View>
				<View style={styles.listContainer}>
					<View style={styles.listItem}>
						<Text style={styles.itemText}>Manzanas</Text>
						<Pressable
							style={styles.deleteItemButton}
							onPress={() => console.log("Se presionó Eliminar Item")}
						>
							<AntDesign name="delete" size={24} color="black" />
						</Pressable>
					</View>
				</View>
			</View>
			<View style={styles.footer}>
				{/* <Button
					title="Vaciar"
					style={styles.deleteAllButton}
					onPress={() => {
						console.log("Se presionó Vaciar");
					}}
					color="#97d000"
				/> */}
				<TouchableHighlight
					style={styles.deleteAllButton}
					activeOpacity={0.6}
					underlayColor="#DDDDDD"
					onPress={() => alert("Pressed!")}
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
		alignItems: "center",
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
		flex: 0.8,
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
		color: "#aaaaaa",
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
		marginTop: 10,
	},
	itemText: {
		fontSize: 20,
	},
	deleteItemButton: {
		marginRight: 6,
	},
	deleteAllButton: {
		marginTop: 10,
		backgroundColor: "#97d000",
		padding: 15,
		borderRadius: 15,
	},
	deleteAllButtonText: {
		fontSize: 24,
	},
	footer: {
		flex: 0.2,
		justifyContent: "center",
	},
});
