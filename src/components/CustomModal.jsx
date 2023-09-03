import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomModal = ({ isModalVisible, setIsModalVisible, onClearList }) => {
	return (
		<Modal animationType="none" visible={isModalVisible} transparent={true}>
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
	);
};

export default CustomModal;

const styles = StyleSheet.create({
	deleteAllItemsModalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "stretch",
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
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
});
