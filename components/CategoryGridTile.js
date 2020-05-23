import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Platform,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';

const CategoryGridTitle = props => {
	const TileComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

	return (
		<View style={styles.gridItem}>
			<TileComponent style={styles.tileWrapper}
				onPress={props.onSelect} >
				<View style={{ ...styles.tile, backgroundColor: props.item.color }}>
					<Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
				</View>
			</TileComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		// margin: 15,
		height: 150
	},
	tileWrapper: {
		flex: 1
	},
	tile: {
		flex: 1,
		// borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		textAlign: 'right'
	}
});

export default CategoryGridTitle;
