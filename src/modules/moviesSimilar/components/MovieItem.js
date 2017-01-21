import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles/MovieItem';
import { POSTER } from '../../../../constants/api';

const MovieItem = ({ movie, openModalInfo }) => (
  <TouchableWithoutFeedback
    onPress={() => openModalInfo(movie)}
  >
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: `${POSTER}/${movie.poster_path}` }}
      />
    </View>
  </TouchableWithoutFeedback>
);

export default MovieItem;
