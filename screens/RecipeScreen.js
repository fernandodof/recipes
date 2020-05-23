import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import Screens from './../navigation/screens';
import { CATEGORIES } from '../data/data';

const RecipeScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');

	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return (
		<View style={styles.screen}>
			<Text>{selectedCategory.title}</Text>
			<Button title='go to details'></Button>
		</View>
	);
};

RecipeScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return {
		headerTitle: selectedCategory.title
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default RecipeScreen;