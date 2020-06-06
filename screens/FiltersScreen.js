import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Switch } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from './../components/HeaderButton';
import Colors from './../constants/Colors';
import { setFilters } from './../store/actions/recipes';

const FiltersSwitch = props => <View style={styles.filterContainer}>
	<Text>{props.label}</Text>
	<Switch value={props.state}
		onValueChange={props.onChange}
		trackColor={{ true: Colors.primaryDark }}
		thumbColor={Platform.OS === 'android' ? Colors.primaryLight : ''}>
	</Switch>
</View>;

const FiltersScreen = props => {
	const { navigation } = props;

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian
		};

		dispatch(setFilters(appliedFilters));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters</Text>
			<FiltersSwitch label='Gluten-free' state={isGlutenFree} onChange={setIsGlutenFree}></FiltersSwitch>
			<FiltersSwitch label='Lactose-free' state={isLactoseFree} onChange={setIsLactoseFree}></FiltersSwitch>
			<FiltersSwitch label='Vegan' state={isVegan} onChange={setIsVegan}></FiltersSwitch>
			<FiltersSwitch label='Vegetarian' state={isVegetarian} onChange={setIsVegetarian}></FiltersSwitch>
		</View>
	);
};

FiltersScreen.navigationOptions = navData => ({
	headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
		<Item title="menu"
			iconName="ios-save"
			onPress={navData.navigation.getParam('save')}>
		</Item>
	</HeaderButtons>
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		margin: 10,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		alignItems: 'center',
		marginBottom: 15
	}
});

export default FiltersScreen;