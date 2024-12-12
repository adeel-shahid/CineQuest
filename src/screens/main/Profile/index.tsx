import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Profile: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, From Profile Screen</Text>
        </View>
    );
}

export default Profile;