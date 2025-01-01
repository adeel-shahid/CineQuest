import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { MovieCardParams } from '../types/types'
import { IMAGE_URL } from '../constants/APIConstants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../appStyles/dimensions'

const MovieCard: React.FC<MovieCardParams> = ({ movie, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.cardContainer}
        >
            <View style={styles.shadowContainer}>
                <Card style={styles.card}>
                    <Card.Cover
                        source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
                        style={styles.cover}
                    />
                    <Card.Content
                        style={styles.content}
                    >
                        <Title style={styles.title}>
                            {movie.title}
                        </Title>

                        <Paragraph style={styles.paragraph}>
                            Rating: {movie.vote_average}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: SCREEN_WIDTH * 0.45,
        margin: 8
    },
    shadowContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3
    },
    card: {
        borderRadius: 8,
        width: SCREEN_WIDTH * 0.45,
        height: SCREEN_HEIGHT * 0.30
    },
    cover: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.19
    },
    content: {
        paddingVertical: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center'
    }
})

export default MovieCard;