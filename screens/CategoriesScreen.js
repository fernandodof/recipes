import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { CATEGORIES } from '../data/data';

// import screens from './../navigation/screens';

const renderGrdItem = itemData => (
	<View style={styles.gridItem}>
		<Text>{itemData.item.title}</Text>
	</View>
);

const CategoriesScreen = props => {
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