import { StyleSheet } from "react-native";
import Home from ".";
import { SCREEN_HEIGHT } from "../../../appStyles/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    homeContainer: {
        marginTop: SCREEN_HEIGHT * 0.02
    }
});

export default styles;