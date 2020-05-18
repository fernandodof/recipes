import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>Filters Screen</Text>
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

export default FiltersScreen;