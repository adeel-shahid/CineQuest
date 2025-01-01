import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { CarouselParams, Data } from "../types/types";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../appStyles/dimensions";
import MovieCard from "./MovieCard";

const Carousel: React.FC<CarouselParams> = ({ data }) => {

    const renderItem = ({ item }: { item: any }) => {
        return (
            <MovieCard movie={item} onPress={() => { console.log("Movie Pressed") }} />
        );
    }

    return (
        <View style={styles.carouselContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={SCREEN_WIDTH * 0.75}
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        paddingVertical: 10
    },
});

export default Carousel;