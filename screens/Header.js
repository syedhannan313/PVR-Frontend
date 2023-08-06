import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'

export default function Header() {

    const types=[{id:"0",name:"IMAX"},{id:"1",name:"4DX"},{id:"2",name:"PLX"},{id:"3",name:"GOLD"},{id:"4",name:"PLAYHOUSE"}]

    return (
        <View>
            <ImageBackground
                source={{ uri: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rS8fGGgs9panboG1ZVGS6CFzXJM.jpg" }}
                style={{ aspectRatio: 5 / 2, hight: 178 }}
            >
            
            <Pressable style={{ alignItems: "center",marginTop:135  }}>
                <View style={{ backgroundColor: "white", width: "80%", height: 120, borderRadius: 10, padding:10 }}>


                    <Text style={{fontSize:14,color:"gray",fontWeight:500}}>Releasing in one day</Text>

                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
                        <View>
                            <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>
                                LAL SING Chadda
                            </Text>
                            <Text style={{fontSize:14,color:"gray",fontWeight:500}}>
                                U/A - HINDI
                            </Text>
                        </View>
                        <View style={{backgroundColor:"#FFD73B",width:"20%",hight:6,alignItems:"center",justifyContent:"center",borderRadius:5}}>
                            <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>
                                BOOK
                            </Text>
                        </View>
                    </View>

                    <Text style={{fontSize:14,color:"black",fontWeight:"bold",marginTop:5}}>Fantacy,thrillrer,action</Text>
                </View>
            </Pressable>
            </ImageBackground>
            <View style={{marginTop:110}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        types.map((item,index)=>(
                            <View style={{margin:10,borderWidth:.4,borderColor:"black",borderRadius:5 ,padding:10}} key={index}>
                                <Text style={{textAlign:"center",fontSize:14,fontWeight:500}}>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}