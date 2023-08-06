import { View, Text, SafeAreaView, StyleSheet, Pressable, FlatList} from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import malls from '../data/malls';



export default function Movie() {
  const mallsdata = malls;
  const route = useRoute()
  const navigation = useNavigation()
  const [mall,setMall]=useState([])
  const [tabledata,setTableData]=useState([])
  const [selectedDate, setSelectedDate] = useState("")
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={{ width: "100%", height: 30, flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ marginHorizontal: 5 }} name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{route.params.name}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginRight: 8 }}>
          <AntDesign name="search1" size={24} color="black" />
          <Ionicons style={{ marginHorizontal: 10 }} name="filter-outline" size={24} color="black" />
          <EvilIcons name="share-apple" size={30} color="black" />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 5, alignItems: "center" }}>
        <AntDesign name="Safety" size={24} color="orange" />
        <Text>Your seafty is our priority</Text>
      </View>

      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date('2023-08-20')}
        endDate={new Date('2023-08-31')}
        initialSelectedDate={new Date('2020-08-22')}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      {
        mallsdata.map((item,index)=>(
          <Pressable 
          onPress={()=>{
            setMall(item.name)
            setTableData(item.tableData)
          }}
          key={index} style={{margin:10}}>
            <Text style={{fontSize:15,fontWeight:500}}>{item.name}</Text>
            {mall.includes(item.name)?
           ( <FlatList numColumns={3} data={item.showtimes} renderItem={({item})=>(
              <Pressable 
              onPress={()=>navigation.navigate("Theater",{
                mall:mall,
                name:route.params.name,
                time:item,
                tabledata:tabledata
              })}
              style={{borderColor:"green",borderWidth:1.5,borderRadius:5,width:80,height:30,alignItems:"center",justifyContent:"center",margin:10}}>
                <Text style={{fontSize:16,fontWeight:500,color:"green"}}>{item}</Text>

              </Pressable>
            )}>

            </FlatList>)
          :
          null}
          </Pressable>
        ))
      }




    </SafeAreaView>


  )

}

const styles = StyleSheet.create(
  {
    selectedItemTextStyle: {}
  }
);