import React from 'react';
import { View, Image } from 'react-native';
import { POSTER } from '../../../../constants/api';
import styles from './styles/Card';

const Card = movie => (
  <View style={styles.posterCard}>
    <Image style={styles.poster} source={{ uri: `${POSTER}/${movie.poster_path}` }} />
  </View>
);

export default Card;
