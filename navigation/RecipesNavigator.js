import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import FavoritesScreen from './../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import CustomHeaderButton from './../components/HeaderButton';

import Screens from './screens';
import Tabs from './tabs';
import Drawer from './drawer';
import Colors from './../constants/Colors';

const isAndroid = Platform.OS === 'android';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
	},
	headerTitleStyle: {
		fontFamily: 'open-sans'
	},
	headerBackStyle: {
		fontFamily: 'open-sans'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const headerLeftConfig = navigationData => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
	<Item title='Drawer' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()}></Item>
</HeaderButtons>;

const RecipesNavigator = createStackNavigator(
	{
		[Screens.CATEGORIES]: {
			screen: CategoriesScreen,
			navigationOptions: navigationData => ({
				headerTitle: 'Recipe Categories',
				headerLeft: headerLeftConfig.bind(this, navigationData)
			})
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
			navigationOptions: navigationData => ({
				headerTitle: 'Favorites',
				headerLeft: headerLeftConfig.bind(this, navigationData)
			})
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
			tabBarColor: Colors.primary,
			tabBarLabel: isAndroid ? <Text style={{ fontFamily: 'open-sans' }}>Recipes</Text> : 'Recipes'
		}
	},
	[Tabs.FAVORITES]: {
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites',
			tabBarIcon: tabInfo => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}></Ionicons>,
			tabBarColor: Colors.primaryDark,
			tabBarLabel: isAndroid ? <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text> : 'Recipes'
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
			activeTintColor: Colors.secondary,
			labelStyle: {
				fontFamily: 'open-sans'
			}
		}
	});

const FilterNavigator = createStackNavigator(
	{
		[Screens.FILTERS]: {
			screen: FiltersScreen,
			navigationOptions: navigationData => ({
				headerTitle: 'Filter Recipes',
				headerLeft: headerLeftConfig.bind(this, navigationData)
			})
		},
	},
	{
		defaultNavigationOptions
	}
);

const MainNavigator = createDrawerNavigator(
	{
		[Drawer.Recipes]: {
			screen: RecipeTabsNavigator,
			navigationOptions: {
				drawerLabel: 'Recipes'
			}
		},
		[Drawer.FILTERS]: FilterNavigator
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary,
			labelStyle: {
				fontFamily: 'open-sans'
			}
		}
	}
);

export default createAppContainer(MainNavigator);