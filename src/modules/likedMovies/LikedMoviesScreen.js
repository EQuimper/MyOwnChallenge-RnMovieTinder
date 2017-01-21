import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, MaterialIcons } from '@exponent/vector-icons';
import { POSTER } from '../../../constants/api';
import styles from './styles/LikedMoviesScreen';
import { removeMovieFromList } from '../swiper/actions';
import Colors from '../../../constants/Colors';

class LikedMoviesScreen extends Component {
  render() {
    if (this.props.data.length < 1) {
      return (
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={styles.getMovieText}>
              No movie liked yet!
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <ScrollView horizontal style={{ flex: 1 }}>
          {this.props.data.map((movie, i) => (
            <View style={styles.movieContainer} key={i}>
              <View style={styles.movieImageContainer}>
                <Image
                  style={styles.movieImage}
                  source={{ uri: `${POSTER}/${movie.image}` }}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => this.props.removeMovieFromList(movie.id)}
              >
                <View style={styles.deleteButton}>
                  <Text style={styles.deleteText}>Remove</Text>
                  <FontAwesome name="trash" color={Colors.redColor} size={25} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </ScrollView>
        <View style={styles.getMeMovieContainer}>
          <TouchableWithoutFeedback
            onPress={() => Actions.moviesSimilar()}
          >
            <View style={styles.getMovieButton}>
              <Text style={styles.getMovieText}>
                Give me some movies
              </Text>
              <MaterialIcons
                name="local-movies"
                size={30}
                color={Colors.blueColor}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.likedMovie
  }),
  { removeMovieFromList }
)(LikedMoviesScreen);
