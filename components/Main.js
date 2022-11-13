import  React, {useState} from 'react';
import {StyleSheet,  View, Text,FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';


export default function Main({navigation}) {
    
  const [listOfItems, setListOfItems] = useState([
    {text: 'Эйфория', index: 1},
    {text: 'Ривердейл', index: 2},
    {text: 'Игра Престолов', index: 3},
  ])
      
    return (
        <View style = {styles.content}>
      
        <Header />
            <View style={styles.content}>
              <Text style={styles.text}>Мои сериалы</Text>
            </View>
        <TouchableOpacity onPress={() => navigation.navigate('Series')}>
          <View>
            <FlatList data={listOfItems} renderItem={({item}) => (
            <ListItem el={item} />

            )}/>

          </View>
          </TouchableOpacity>
      

       </View>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFFAEE'
        },
    text: {
      fontFamily: 'fs-SemiBold',
      paddingTop: 22,
      height: 74,
      fontSize: 24,
      color: 'black',
      marginLeft: '10%',
    }
  });