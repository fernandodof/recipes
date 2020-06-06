import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import RecipeList from './../components/RecipeList';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
	const favorites = useSelector(state => state.recipes.favoriteRecipes);

	if (!favorites || !favorites.length) {
		return <View style={styles.noFavorites}>
			<DefaultText>You have no favorite recipes yet</DefaultText>
		</View>
	}

	return <RecipeList listData={favorites} navigation={props.navigation}></RecipeList>
};

const styles = StyleSheet.create({
	noFavorites: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default FavoritesScreen;