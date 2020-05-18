import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

import Screens from './screens';

const RecipesNavigator = createStackNavigator({
	[Screens.CATEGORIES]: CategoriesScreen,
	[Screens.RECIPES]: RecipeScreen,
	[Screens.RECIPE_DETAILS]: RecipeDetailsScreen
});

export default createAppContainer(RecipesNavigator);