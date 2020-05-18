import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const RecipeDetailsScreen = props => {

	const goToCategories = () => props.navigation.popToTop();

	return (
		<View style={styles.screen}>
			<Text>Recipe details screen</Text>
			<Button title='Go to categories' onPress={goToCategories.bind(this)}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default RecipeDetailsScreen;