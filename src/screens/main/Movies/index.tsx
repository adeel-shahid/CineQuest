import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Movies: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, From Movies Screen</Text>
        </View>
    );
}

export default Movies;