import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { CATEGORIES, RECIPES } from '../data/data';
import Recipe from '../components/Recipe';

const RecipeScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');
	const recipes = RECIPES.filter(recipe => recipe.categoryIds.includes(categoryId));

	const renderRecipe = itemData => <Recipe item={itemData.item} onSlect={() => { }}></Recipe>;

	return (
		<View style={styles.screen}>
			<FlatList style={styles.list} data={recipes} renderItem={renderRecipe}></FlatList>
		</View>
	);
};

RecipeScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return {
		headerTitle: selectedCategory.title
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	},
	list: {
		width: '100%'
	}
});

export default RecipeScreen;