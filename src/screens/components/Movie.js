import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import Navigation from '../../navigation/Navigation';

const Movie = props => {
  
  return (
    <>
      <Card>
        <Card.Title>{props.data?.Title}</Card.Title>
        <Card.Divider />
        <TouchableOpacity onPress={()=>props.imagePress(props.data?.Poster)}>
          <Card.Image source={{uri: props.data?.Poster}} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', flex: 1}}>
          <Text style={{marginVertical: 10, flex: 1, textAlign: 'center'}}>
            Year: {props.data?.Year}
          </Text>
          <Text style={{marginVertical: 10, flex: 1, textAlign: 'center'}}>
            Year: {props.data?.Year}
          </Text>
        </View>

        <Button
          // icon={<Icon name='code' color='#ffffff' />}
          onPress={()=>props.navigation.navigate('movieDetail',{
            imdbID: props.data?.imdbID,
          
          })}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Details"
        />
      </Card>
    
    </>
  );
};

export default Movie;
