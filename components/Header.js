import  React, {useState}  from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


export default function Header() {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);

    };


  return (
    <View style={styles.main}>
        <TextInput style={styles.input} onChangeText= {onChange} placeholder='Поиск'/>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 52,
    height: 110,
    backgroundColor: '#181C45',
    
  },
  input: {
    fontFamily: 'fs-SemiBold',
    fontSize: 18,
    color: '#FFFAEE',
    textAlign:'center',
    backgroundColor: '#FFFAEE',
    width: '55%',
    height: 32,
    marginLeft: '22,5%',
    justifyContent: 'center',
    borderRadius: 8
  }
});
