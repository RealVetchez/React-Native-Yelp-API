import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Results', { id: item.id })}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		marginBottom: 10,
	},
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 18,
		marginLeft: 15,
		marginBottom: 5,
	},
});

export default withNavigation(ResultsList);
