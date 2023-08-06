import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import movies from '../data/movies'
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

export default function MovieCards() {
    const navigation=useNavigation();
    const data=movies;
  return (
    <View >
    <FlatList showsHorizontalScrollIndicator={false} ListHeaderComponent={Header}data={data} numColumns={2} renderItem={({item})=>(
        <Pressable style={{flex:1,margin:10}}>
            <Image 
            style={{aspectRatio:2/3,height:240,borderRadius:5,marginLeft:8}}
            source={{uri:item.image}}>
            </Image>
            <Text style={{fontSize:14,fontWeight:"bold",color:"black",marginLeft:10}}>{item.name}</Text>
            <Text style={{fontSize:14,fontWeight:500,color:"gray",marginLeft:10}}> U/A + {item.language}</Text>
            <Text style={{fontSize:14,fontWeight:500,color:"black",marginLeft:10}}>{item.genre}</Text>
            <Pressable 
            onPress={()=>navigation.navigate("Movie",{name:item.name})}
            style={{marginLeft:10,width:80,height:30,marginTop:5,alignItems:"center",justifyContent:"center",backgroundColor:"#FFD73B",borderRadius:5}}>
                <Text style={{fontSize:15,color:"black",fontWeight:"500"}}>BOOK</Text>
            </Pressable>
        </Pressable>
    )}>

    </FlatList>
    </View>
  )
}