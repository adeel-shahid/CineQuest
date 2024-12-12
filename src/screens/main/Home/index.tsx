import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, From Home Screen</Text>
        </View>
    );
}

export default Home;