import React from 'react';
import {
	StyleSheet,
	FlatList,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/data';
import Screens from './../navigation/screens';

const CategoriesScreen = props => {
	const renderGrdItem = itemData => (
		<TouchableOpacity style={styles.gridItem}
			onPress={() => props.navigation.navigate(Screens.RECIPES, { categoryId: itemData.item.id })} >
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		</TouchableOpacity>
	);

	// const goToRecipes = () => props.navigation.navigate(screens.RECIPES);
	return <FlatList data={CATEGORIES} renderItem={renderGrdItem} numColumns={2} ></FlatList>
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}
});

export default CategoriesScreen;