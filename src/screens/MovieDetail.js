import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {movieById} from '../services/SearchMovie';
const MovieDetail = ({navigation, route}) => {
    const [DATA, setDATA] = useState([]);

  const {imdbID} = route.params;
  useEffect(() => {
    movieById(imdbID)
      .then(response => {
     console.log(JSON.stringify(response, null,2));
     setDATA(response.data)
      })
      .catch(e => {
       console.log(e);
      });
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
      <Image
            style={{width: '40%', height:'30%'}}
            source={{
              uri: DATA.Poster,
            }}
          />
        <Text>{DATA.Title}</Text>
        <Text>{DATA.Year}</Text>
        <Text>{DATA.Rated}</Text>
        <Text>{DATA.Released}</Text>
        <Text>{DATA.Runtime}</Text>
        <Text>{DATA.Genre}</Text>
        <Text>{DATA.Director}</Text>
        <Text>{DATA.Writer}</Text>
        <Text>{DATA.Actors}</Text>
        <Text>{DATA.Plot}</Text>
        <Text>{DATA.Language}</Text>
        <Text>{DATA.Country}</Text>
        <Text>{DATA.Award}</Text>
        


      </View>
    </>
  );
};

export default MovieDetail;
