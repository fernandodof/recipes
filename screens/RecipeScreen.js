import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import screens from './../navigation/screens';

const RecipeScreen = props => {

	const getToDetails = () => props.navigation.navigate(screens.RECIPE_DETAILS);

	return (
		<View style={styles.screen}>
			<Text>Recipes Screen</Text>
			<Button title='go to details' onPress={getToDetails.bind(this)}></Button>
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

export default RecipeScreen;