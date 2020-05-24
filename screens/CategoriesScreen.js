import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/data';
import Screens from './../navigation/screens';
import CategoryGridTile from './../components/CategoryGridTile';

const CategoriesScreen = props => {
	const renderGrdItem = itemData => (
		<CategoryGridTile
			item={itemData.item}
			onSelect={() => props.navigation.navigate(Screens.RECIPES, { categoryId: itemData.item.id })}>
		</CategoryGridTile>
	);

	return <FlatList data={CATEGORIES} renderItem={renderGrdItem} numColumns={2} ></FlatList>
};

export default CategoriesScreen;