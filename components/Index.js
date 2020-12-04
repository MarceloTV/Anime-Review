/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

const Index = ({navigation}) => {

  const [animes,setAnimes] = useState([])
  const [text,setText] = useState('')
  const [charge,setCharge] = useState('Anime not Found')

  const search = (e) => {
    setCharge('Waiting...')
    setAnimes([])
    fetch(`https://api.jikan.moe/v3/search/anime?q=${text}`).then(data => data.json())
    .then(data => {
      setAnimes(data.results)
    })
  }

  useEffect(() => {
    
  },[])

  return(
    <>
      <View style={styles.header}>
        <Text style={styles.logo}>Anime Review</Text>
        <View style={styles.inputContent}>
          <TextInput onChangeText={str => setText(str)} placeholder="Type your anime here" style={styles.input}/>
          <Button onPress={search} title="Search"/>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {animes.length == 0 && <View style={styles.notFound}>
            <Text>{charge}</Text>  
          </View>}
          {animes.map((v,i) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('Anime',v)} key={i} style={styles.content}>
                  <Image source={{uri: v.image_url}} style={{width: 100,height:200}}/>
                  <Text>{v.title}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </>
  )  

}

const styles = StyleSheet.create({
  header:{
    /* flex: 3, */
    backgroundColor:'aqua',
    padding: 20
  },
  logo:{
    fontSize: 45,
    textAlign: 'center'
  },
  inputContent:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },  
  input:{
    height:40,
    width:'75%',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  notFound:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding: 50
  },
  container:{
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  content:{
    width:100,
    marginBottom: 10
  }
})

export default Index