import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import FavoritesScreen from './../screens/FavoritesScreen';

import Screens from './screens';
import Tabs from './tabs';
import Colors from './../constants/Colors';

const isAndroid = Platform.OS === 'android';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

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
		defaultNavigationOptions
	}
);

const FavoritesNavigator = createStackNavigator(
	{
		[Screens.FAVORITES]: {
			screen: FavoritesScreen,
			navigationOptions: {
				headerTitle: 'Favorites'
			}
		},
		[Screens.RECIPE_DETAILS]: RecipeDetailsScreen
	},
	{
		defaultNavigationOptions
	}
);

const tabConfig = {
	[Tabs.RECIPES]: {
		screen: RecipesNavigator,
		navigationOptions: {
			tabBarLabel: 'Recipes',
			tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}></Ionicons>,
			tabBarColor: Colors.primary
		}
	},
	[Tabs.FAVORITES]: {
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites',
			tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}></Ionicons>,
			tabBarColor: Colors.primaryDark
		}
	}
};

const RecipeTabsNavigator = isAndroid
	? createMaterialBottomTabNavigator(tabConfig, {
		activeColor: 'white',
		shifting: true
	})
	: createBottomTabNavigator(tabConfig, {
		tabBarOptions: {
			activeTintColor: Colors.secondary
		}
	});

export default createAppContainer(RecipeTabsNavigator);