import  React  from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';


export default function ListItem({el}) {
  return (
    <TouchableHighlight>
        <View >
            <View style={styles.blocks}>
                <View style={styles.textBlock}>
                    <Text style={styles.textTitle}>{el.text}</Text>
                    <Text style={styles.textMain}>Сезонов: </Text>
                    <Text style={styles.textMain}>Серий: </Text>
                </View>
                <View style={styles.progressBar}>
            
                </View>
            </View>
            <View style={styles.line}>

            </View>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'fs-SemiBold',
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'left'

  },
  textMain: {
    fontFamily: 'fs-Regular',
    fontSize: 16,
    color: '#999999',
    textAlign: 'left'

  },
  textBlock: {
    fontFamily: 'fs-Regular',
    height: 72,
    width: '60%',
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: '#fff',
    

  },
  progressBar: {
    
    height: 72,
    width: '30%',
    marginRight: '5%',
    marginTop: '5%',
    backgroundColor: '#fff',
    

  },
  line: {
    marginLeft: '5%',
    marginRight: '5%',
    height: 1,
    backgroundColor: '#BABBC7',

  },

  blocks: {
    
   
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'

  }

});
