import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = ({ result }) => {
	return (
		<View style={styles.containerStyle}>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.fontStyle}>{result.name}</Text>
			<Text>
				{result.rating} Stars, {result.review_count} Reviews{' '}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		marginLeft: 10,
	},
	imageStyle: {
		width: 250,
		height: 150,
		borderRadius: 5,
		marginBottom: 5,
	},
	fontStyle: {
		fontWeight: 'bold',
	},
});

export default ResultsDetail;
