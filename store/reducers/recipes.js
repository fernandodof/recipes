import { RECIPES } from './../../data/data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/recipes';

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
		case SET_FILTERS:
			const appliedFilters = action.filters;
			const filteredRecipes = state.recipes.filter(recipe => {
				if (appliedFilters.glutenFree && !recipe.isGlutenFree) {
					return false;
				}

				if (appliedFilters.lactoseFree && !recipe.isLactoseFree) {
					return false
				}

				if (appliedFilters.vegan && !recipe.isVegan) {
					return false;
				}

				if (appliedFilters.vegetarian && !recipe.isVegetarian) {
					return false;
				}

				return true;
			});

			return { ...state, filteredRecipes };
		default:
			return state;
	}
};

export default recipesReducer;