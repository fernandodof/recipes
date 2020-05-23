import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	ImageBackground
} from 'react-native';

import Colors from '../constants/Colors';

const Recipe = props => {
	const RecipeComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
	const item = props.item;

	return (
		<RecipeComponent onPress={props.onSelect}>
			<View style={styles.recipe}>
				<View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
					<ImageBackground source={{ uri: item.imageUrl }} style={styles.bgIamge}>
						<View style={styles.titleContainer}>
							<Text style={styles.title} numberOfLines={1}>{item.title}</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.recipeRow, ...styles.recipeDetail }}>
					<Text style={styles.recipeDetailText}>{item.duration}</Text>
					<Text style={styles.recipeDetailText}>{item.complexity.toUpperCase()}</Text>
					<Text style={styles.recipeDetailText}>{item.affordability}</Text>
				</View>
			</View>
		</RecipeComponent>
	);
};

const styles = StyleSheet.create({
	recipe: {
		height: 200,
		width: '100%',
		backgroundColor: Colors.temptress
	},
	recipeRow: {
		flexDirection: 'row'
	},
	recipeHeader: {
		height: '85%'
	},
	titleContainer: {
		backgroundColor: `rgba(${Colors.secondaryRGB.red}, ${Colors.secondaryRGB.green}, ${Colors.secondaryRGB.blue}, 0.7)`,
		paddingVertical: 5,
		paddingHorizontal: 10
	},
	title: {
		fontFamily: 'open-sans-bold',
		color: 'white',
		fontSize: 20
	},
	recipeDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
		color: 'white'
	},
	recipeDetailText: {
		color: 'white'
	},
	bgIamge: {
		width: '100%',
		height: '100%'
	}
});

export default Recipe;
