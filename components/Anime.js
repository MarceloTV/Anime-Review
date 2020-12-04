import React from 'react'
import { Text,View,ScrollView,Image,StyleSheet,Dimensions } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Anime = ({route,navigation}) => {

    const {title,image_url,synopsis,type,episodes,score,airing} = route.params

    return(
        <ScrollView>

            <View style={styles.Head}>
                <Image style={styles.img} source={{uri: image_url}}/>
                <View style={styles.textContent}>
                    <Text style={styles.title}>{title}</Text>
                    {airing ? 
                        <Text style={styles.airing}>Airing</Text>:
                        <Text style={styles.finalized}>Finalized</Text>
                    }
                </View>
            </View>

            <View style={styles.data}>
                <Text>Type: {type}</Text>
                <Text>Episodes: {episodes}</Text>
                <Text>Score: {score}/10</Text>
            </View>

            <View style={styles.synopsis}>
                <Text>{synopsis}</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Head:{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    },
    img: {
        width: width * .44,
        height: height * .4
    },
    textContent: {
        width: width * .45,
        height: height * .4,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    airing:{
        color: 'green',
        borderColor: 'green',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        textAlign: 'center'
    },
    finalized:{
        color: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        textAlign: 'center'
    },
    data:{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    synopsis: {
        padding: 10
    }

})

export default Anime