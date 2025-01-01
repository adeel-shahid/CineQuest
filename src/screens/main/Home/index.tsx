import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Carousel from "../../../components/Carousel";

const moviesSampleData = [
    {
        id: '1',
        title: 'Inception',
        poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        vote_average: 8.8
    },
    {
        id: '2',
        title: 'Interstellar',
        poster_path: '/gEU2QniE6E77NI61CU6MxINBvIx.jpg',
        vote_average: 8.6
    },
    {
        id: '3',
        title: 'The Dark Knight',
        poster_path: '/qJ2tW6WMUDux911r6m7haReTOWH.jpg',
        vote_average: 9.0
    },
    {
        id: '4',
        title: 'Pulp Fiction',
        poster_path: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
        vote_average: 8.9
    },
    {
        id: '5',
        title: 'The Shawshank Redemption',
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        vote_average: 9.3
    }
];
const Home: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeContainer}>
                <Text style={styles.text}>Hello, From Home Screen</Text>
                <Carousel data={moviesSampleData} />
            </View>
        </SafeAreaView>
    );
}

export default Home;