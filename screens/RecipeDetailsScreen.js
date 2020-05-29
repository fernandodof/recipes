import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from './../components/DefaultText';

const ListItem = props => <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>;

const RecipeDetailsScreen = props => {
	const availableRecipes = useSelector(state => state.recipes.recipes);

	const recipeId = props.navigation.getParam('recipeId');
	const seletedRecipe = availableRecipes.find(recipe => recipe.id = recipeId);

	return (
		<ScrollView>
			<Image source={{ uri: seletedRecipe.imageUrl }} style={styles.image}></Image>
			<View>
			</View>
			<View style={styles.details}>
				<DefaultText style={styles.recipeDetailText}>{seletedRecipe.duration}m</DefaultText>
				<DefaultText style={styles.recipeDetailText}>{seletedRecipe.complexity.toUpperCase()}</DefaultText>
				<DefaultText style={styles.recipeDetailText}>{seletedRecipe.affordability}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{seletedRecipe.ingridients.map((ingridient, index) => <ListItem key={index}>{ingridient}</ListItem>)}
			<Text style={styles.title}>Steps</Text>
			{seletedRecipe.steps.map((steps, index) => <ListItem key={index}>{steps}</ListItem>)}
		</ScrollView>
	);
};

RecipeDetailsScreen.navigationOptions = navigationData => {
	const seletedRecipeTitle = navigationData.navigation.getParam('recipeTitle');

	return {
		headerTitle: seletedRecipeTitle,
		headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Favorite' iconName='ios-star-outline' onPress={() => console.log('Mark favorite')}></Item>
		</HeaderButtons>
	};
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#bbb',
		borderWidth: 1,
		padding: 10
	}
});

export default RecipeDetailsScreen;