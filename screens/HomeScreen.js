import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import MovieCards from './MovieCards'

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#D3D3D3"}}>
      {/* <Header></Header> */}

      <MovieCards>

      </MovieCards>
    </SafeAreaView>
  )
}