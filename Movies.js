import React from 'react';
import {View, Text, Image} from 'react-native';

//Exercise 2

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.year}</Text>
      </View>
    );
  }
}

const movie = {title: 'Doctor Sleep', year: '2019'};
/*
//exercise 3 and 4
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];

let MovieList = () => {
  return MOVIES_DATA.map((movie) => (
    <Movie title={movie.title} year={movie.year} />
  ));
};
*/

//exercise 5
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

let MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <View>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={movie.poster} />
      </View>
    );
  });
};

export {Movie, MOVIES_DATA, MovieList};
