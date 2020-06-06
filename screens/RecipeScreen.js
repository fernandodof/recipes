import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/data';
import RecipeList from './../components/RecipeList';
import DefaultText from '../components/DefaultText';

const RecipeScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');
	const availableRecipes = useSelector(state => state.recipes.filteredRecipes);
	const recipes = availableRecipes.filter(recipe => recipe.categoryIds.includes(categoryId));

	if (!recipes.length) {
		return <View style={styles.noRecipes}>
			<DefaultText>No recipes to show here, maybe check your filters?</DefaultText>
		</View>
	}

	return <RecipeList listData={recipes} navigation={props.navigation}></RecipeList>
};

RecipeScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return {
		headerTitle: selectedCategory.title
	};
};

const styles = StyleSheet.create({
	noRecipes: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 15
	}
})

export default RecipeScreen;