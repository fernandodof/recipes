import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screens from './../navigation/screens';
import Recipe from './Recipe';

const RecipeList = props => {
	const renderRecipe = itemData => (
		<Recipe item={itemData.item}
			onSelect={() => props.navigation.navigate(Screens.RECIPE_DETAILS, { recipeId: itemData.item.id, recipeTitle: itemData.item.title })}>
		</Recipe>);

	return (
		<View style={styles.list}>
			<FlatList data={props.listData} renderItem={renderRecipe}></FlatList>
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
