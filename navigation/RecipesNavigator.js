import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

import Screens from './screens';
import Colors from './../constants/Colors';

const RecipesNavigator = createStackNavigator(
	{
		[Screens.CATEGORIES]: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: 'Recipe Categories'
			}
		},
		[Screens.RECIPES]: RecipeScreen,
		[Screens.RECIPE_DETAILS]: RecipeDetailsScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
		}
	}
);

export default createAppContainer(RecipesNavigator);