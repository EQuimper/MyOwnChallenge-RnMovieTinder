import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesSimilar, getMoviesSimilarFirst } from './actions';
import { LoadingScreen } from '../../commons';
import { MoviesSimilarList } from './components';

class MoviesSimilarScreen extends Component {
  state = {
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getMoviesSimilarFirst(this.props.likedMovie[0].id);
    this.setState({ loading: false });
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return <MoviesSimilarList
      liked={this.props.likedMovie}
      movies={this.props.moviesSimilar.movies}
      getMoviesSimilar={this.props.getMoviesSimilar}
    />;
  }
}

export default connect(
  state => ({
    likedMovie: state.likedMovie,
    moviesSimilar: state.moviesSimilar
  }),
  { getMoviesSimilar, getMoviesSimilarFirst }
)(MoviesSimilarScreen);
