import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/data';
import RecipeList from './../components/RecipeList';

const RecipeScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');
	const availableRecipes = useSelector(state => state.recipes.filteredRecipes);
	const recipes = availableRecipes.filter(recipe => recipe.categoryIds.includes(categoryId));

	return <RecipeList listData={recipes} navigation={props.navigation}></RecipeList>
};

RecipeScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return {
		headerTitle: selectedCategory.title
	};
};

export default RecipeScreen;