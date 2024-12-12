import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const TvShows: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, From TvShows Screen</Text>
        </View>
    );
}

export default TvShows;