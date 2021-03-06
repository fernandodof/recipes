import React, { useEffect, useCallback } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from './../components/DefaultText';
import { toggleFavorite } from '../store/actions/recipes';

const ListItem = props => <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>;

const RecipeDetailsScreen = props => {
	const availableRecipes = useSelector(state => state.recipes.recipes);
	const recipeId = props.navigation.getParam('recipeId');

	const isFavorite = useSelector(state => state.recipes.favoriteRecipes.some(recipe => recipe.id = recipeId));

	const seletedRecipe = availableRecipes.find(recipe => recipe.id === recipeId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(recipeId));
	}, [dispatch, recipeId]);

	useEffect(() => {
		props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler })
	}, [toggleFavoriteHandler])

	useEffect(() => {
		props.navigation.setParams({ isFavorite: isFavorite })
	}, [isFavorite]);

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
	const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
	const isFavorite = navigationData.navigation.getParam('isFavorite');

	return {
		headerTitle: seletedRecipeTitle,
		headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite}></Item>
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