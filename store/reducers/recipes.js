import { RECIPES } from './../../data/data';
import { TOGGLE_FAVORITE } from '../actions/recipes';

const initialState = {
	recipes: RECIPES,
	filteredRecipes: RECIPES,
	favoriteRecipes: []
};

const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteRecipes.findIndex(recipe => recipe.id === action.recipeId);

			if (existingIndex >= 0) {
				const updatedFavorites = [...state.favoriteRecipes];
				updatedFavorites.splice(existingIndex, 1);
				return {
					...state,
					favoriteRecipes: updatedFavorites
				};
			} else {
				const newFavorite = state.recipes.find(recipe => recipe.id === action.recipeId);
				return {
					...state,
					favoriteRecipes: state.favoriteRecipes.concat(newFavorite)
				};
			}
			break;
		default:
			return state;
	}
};

export default recipesReducer;