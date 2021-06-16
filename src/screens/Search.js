import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchMovie, {PageMovie} from '../services/SearchMovie';
import Movie from './components/Movie';

const Search = props => {
  const [search, setSearch] = useState('');
  const [DATA, setDATA] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = search => {
    SearchMovie(search)
      .then(response => {
        console.log(JSON.stringify(response.data.Search, null, 2));

        response.data.Search && setDATA(response.data.Search);
      })
      .catch(e => {
        console.log(JSON.stringify(e, null, 2));
      });
  };
  const addList = page => {
    PageMovie(search, page)
      .then(response => {
        console.log('ADD PAGE', JSON.stringify(response.data, null, 2));
        setDATA(prevState => [...prevState, ...response.data.Search]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handlePressImage = imageUri => {
    console.log(imageUri);
    setModalImage(imageUri);
    setModalVisible(true);
  };

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      handleChange(search);
    }, 800);

    return () => window.clearTimeout(timeoutID);
  }, [search]);

  return (
    <View style={styles.container}>
      {DATA === [] && <Text style={styles.bigText}>SEARCH YOUR MOVIES</Text>}
      <SearchBar
        placeholder="Type Here..."
        onChangeText={search => setSearch(search)}
        value={search}
        lightTheme={true}
        containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
      />
      <FlatList
        onEndReached={() => {
          addList(page + 1) ;setPage(page + 1);
        }}
        onEndReachedThreshold={0.5}
        data={DATA}
        renderItem={({item, index}) => (
          <Movie
            data={item}
            index={index}
            imagePress={handlePressImage}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.imdbID}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => setModalVisible(false)}>
          <Image
            style={{width: '80%', height: '80%'}}
            source={{
              uri: modalImage,
            }}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  bigText: {
    marginBottom: '10%',

    paddingTop: '15%',
    color: '#333333',
    fontSize: 50,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Search;
