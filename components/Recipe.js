import React from 'react';
import {
	View,
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	ImageBackground
} from 'react-native';

import Colors from '../constants/Colors';
import DefaultText from './DefaultText';

const Recipe = props => {
	const RecipeComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
	const item = props.item;

	return (
		<RecipeComponent onPress={props.onSelect}>
			<View style={styles.recipe}>
				<View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
					<ImageBackground source={{ uri: item.imageUrl }} style={styles.bgIamge}>
						<View style={styles.titleContainer}>
							<DefaultText style={styles.title} numberOfLines={1}>{item.title}</DefaultText>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.recipeRow, ...styles.recipeDetail }}>
					<DefaultText style={styles.recipeDetailText}>{item.duration}m</DefaultText>
					<DefaultText style={styles.recipeDetailText}>{item.complexity.toUpperCase()}</DefaultText>
					<DefaultText style={styles.recipeDetailText}>{item.affordability}</DefaultText>
				</View>
			</View>
		</RecipeComponent>
	);
};

const styles = StyleSheet.create({
	recipe: {
		height: 200,
		width: '100%',
		backgroundColor: 'black'
	},
	recipeRow: {
		flexDirection: 'row'
	},
	recipeHeader: {
		height: '85%'
	},
	titleContainer: {
		backgroundColor: `rgba(${Colors.secondaryDarkRGB.red}, ${Colors.secondaryDarkRGB.green}, ${Colors.secondaryDarkRGB.blue}, 0.7)`,
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
