import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { RECIPES } from './../data/data';
import CustomHeaderButton from '../components/HeaderButton';

const RecipeDetailsScreen = props => {
	const recipeId = props.navigation.getParam('recipeId');
	const seletedRecipe = RECIPES.find(recipe => recipe.id = recipeId);

	return (
		<View style={styles.screen}>
			<Text>{seletedRecipe.title}</Text>
		</View>
	);
};

RecipeDetailsScreen.navigationOptions = navigationData => {
	const recipeId = navigationData.navigation.getParam('recipeId');
	const seletedRecipe = RECIPES.find(recipe => recipe.id = recipeId);

	return {
		headerTitle: seletedRecipe.title,
		headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Favorite' iconName='ios-star-outline' onPress={() => console.log('Mark favorite')}></Item>
		</HeaderButtons>
	};
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default RecipeDetailsScreen;