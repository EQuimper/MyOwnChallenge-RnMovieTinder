import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { Components } from 'exponent';
import { FontAwesome } from '@exponent/vector-icons';
import { POSTER } from '../../../../constants/api';
import MovieMeta from './MovieMeta';
import styles from './styles/InfoModal';

const colors = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.7)', 'rgba(0,0,0,0.4)'];

const InfoModal = ({ visible, movie, close }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={close} style={styles.closeButton}>
            <FontAwesome name="close" color="#fff" size={50} />
          </TouchableOpacity>
          <Image
            source={{ uri: `${POSTER}/${movie.poster_path}` }}
            style={styles.poster}
          />
          <Components.LinearGradient colors={colors} style={styles.imagesMeta}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>{movie.title}</Text>
            </View>
            <View style={styles.overviewContainer}>
              <Text style={styles.overviewStyle}>{movie.overview}</Text>
            </View>
          </Components.LinearGradient>
        </View>
        <MovieMeta movie={movie} />
      </View>
    </View>
  </Modal>
);

export default InfoModal;
