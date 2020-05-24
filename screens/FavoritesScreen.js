import React from 'react';

import RecipeList from './../components/RecipeList';
import { RECIPES } from './../data/data';

const FavoritesScreen = props => {
	const recipes = RECIPES.slice(0, 2);

	return <RecipeList listData={recipes} navigation={props.navigation}></RecipeList>
};


export default FavoritesScreen;