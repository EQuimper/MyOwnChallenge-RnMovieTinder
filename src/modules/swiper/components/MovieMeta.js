import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import styles from './styles/MovieMeta';
import Panel from './Panel';

const MovieMeta = ({ movie }) => (
  <View style={styles.bottomContainer}>
    <Panel title="Rating">
      {movie.vote_average} <FontAwesome name="star" color="#fff" /> / {''}
      {movie.vote_count} <FontAwesome name="users" color="#fff" />
    </Panel>
    <Panel title="Release Date">
      <FontAwesome name="calendar" color="#fff" /> {movie.release_date}
    </Panel>
    <Panel title="Trailer">
      Watch here
    </Panel>
  </View>
);

export default MovieMeta;
