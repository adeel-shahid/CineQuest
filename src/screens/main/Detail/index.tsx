import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Detail: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, From Detail Screen</Text>
        </View>
    );
}

export default Detail;