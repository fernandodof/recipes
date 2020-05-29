import React from 'react';
import { useSelector } from 'react-redux';

import RecipeList from './../components/RecipeList';

const FavoritesScreen = props => {
	const favorites = useSelector(state => state.recipes.favoriteRecipes);

	return <RecipeList listData={favorites} navigation={props.navigation}></RecipeList>
};


export default FavoritesScreen;