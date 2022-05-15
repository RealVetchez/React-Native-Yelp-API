import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from '../api/Yelp';
import { Feather } from '@expo/vector-icons';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ResultsScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam('id');
	const ratingStars = [];

	const getResult = async (id) => {
		const response = await Yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	for (let j = 0; j < result.rating; j++) {
		ratingStars.push(
			<View key={j}>
				<Text style={{ fontSize: 20 }}>⭐</Text>
			</View>
		);
	}

	return (
		<View style={styles.containerStyle}>
			<View>
				<Text style={styles.titleStyle}>{result.name}</Text>
				<View style={styles.ratingStars}>
					<Text style={styles.detailText}> {result.rating} ⭐ </Text>
				</View>
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.imageStyle} source={{ uri: item }} />;
				}}
			/>
			<View style={styles.detailTitle}>
				<Text style={styles.titleText}>Phone</Text>
				<View style={styles.detailRow}>
					<Feather style={styles.detailIcon} name="phone-call" />
					<Text style={styles.detailText}>{result.phone}</Text>
				</View>
			</View>

			<View style={styles.detailTitle}>
				<Text style={styles.titleText}>Address</Text>
				<View style={styles.detailRow}>
					<Feather style={styles.detailIcon} name="map-pin" />
					<Text style={styles.detailText}>{result.location.address1}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		alignItems: 'center',
	},

	titleStyle: {
		alignSelf: 'center',
		textAlign: 'center',
		marginVertical: 10,
		fontWeight: 'bold',
		fontSize: 30,
	},

	ratingStars: {
		alignSelf: 'center',
		flexDirection: 'row',
		marginBottom: 20,
	},

	imageStyle: {
		width: 250,
		height: 150,
		borderRadius: 5,
		marginBottom: 5,
		marginLeft: 10,
	},

	detailTitle: {
		marginTop: 10,
	},

	titleText: {
		alignSelf: 'center',
		fontSize: 25,
		borderBottomWidth: 5,
		borderColor: 'black',
	},

	detailText: {
		fontSize: 18,
	},

	detailIcon: {
		marginRight: 15,
		fontSize: 30,
	},

	detailRow: {
		flexDirection: 'row',
		marginTop: 10,
	},
});

export default ResultsScreen;
