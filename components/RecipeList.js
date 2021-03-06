import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Screens from './../navigation/screens';
import Recipe from './Recipe';

const RecipeList = props => {
	const favoriteRecipes = useSelector(state => state.recipes.favoriteRecipes);

	const renderRecipe = itemData => {
		const isFavorite = favoriteRecipes.some(recipe => recipe.id === itemData.item.id);

		return (<Recipe item={itemData.item}
			onSelect={() => props.navigation.navigate(Screens.RECIPE_DETAILS, {
				recipeId: itemData.item.id,
				recipeTitle: itemData.item.title,
				isFavorite: isFavorite
			})}>
		</Recipe>);
	}

	return (
		<View style={styles.list}>
			<FlatList data={props.listData} renderItem={renderRecipe} keyExtractor={item => item.id}></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default RecipeList;
