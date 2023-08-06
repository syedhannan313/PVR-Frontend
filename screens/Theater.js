import { View, Text, SafeAreaView, FlatList, Pressable,Alert } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';
import malls from '../data/malls';
import { useNavigation } from '@react-navigation/native';
import { MovieCards, MovieContext } from './Context';
import { useStripe } from '@stripe/stripe-react-native';


export default function Theater() {
    const navigation=useNavigation();
    const route = useRoute();
    const {seats,setSeates}=useContext(MovieCards);
    const onSeatSelect=(item)=>{
    
        const seatSeleacted=seats.find((seat)=>seat===item);
        if(seatSeleacted){
            setSeates(seats.filter((seat)=> seat!==item))
        }else{
            setSeates([...seats,item])
        }
    } 
    const showSeats=()=>{
        return(
            <View style={{flexDirection:"row",alignItems:"center"}}>
           { seats.map((seat,key)=>(
                <Text style={{margin:3}}>{seat}</Text>
            ))}
            </View>
        )
    }
    const fee=87;
    const noOfSeats=seats.length;
    const total=noOfSeats>0 ? fee+ noOfSeats*240 : 0;

    const stripe = useStripe();
    const subscribe = async() => {
      const response = await fetch("http://localhost:8080/payment", {
        method: "POST",
        body: JSON.stringify({
          amount:Math.floor(total * 100),
  
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
  
      else{
    //     occupied.push(...seats);
    //     navigation.navigate("Ticket",{
    //       name:route.params.name,
    //       mall:route.params.mall,
    //       timeSelected:route.params.timeSelected,
    //       total:total,
    //       image:route.params.image,
    //       date:route.params.date,
    //       selectedSeats:displaySeats,
    //       priceValue:priceValue,
    //     })
  
  
        setSeates([]);
      }

    }

    return (
        <SafeAreaView style={{ marginTop: 25 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Ionicons
                        onPress={() => navigation.goBack()}
                        style={{ marginHorizontal: 5 }} name="arrow-back" size={24} color="black" />
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {route.params.name}

                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>

                            {route.params.mall}
                        </Text>
                    </View>

                </View >
                <View>
                    <EvilIcons name="share-apple" size={30} color="black" />
                </View>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textAlign: "center" }}>{route.params.time}</Text>
            </View>


            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 14, color: "gray", fontWeight: 500, textAlign: "center" }}>CLASIC (240.00)</Text>
            </View>
            <View style={{marginTop:12,marginBottom:12}}>
                <FlatList numColumns={7} data={route.params.tabledata} renderItem={({ item} ) =>

                    <Pressable 
                    onPress={()=>onSeatSelect(item)}
                    style={{margin:12,width:30,height:30,borderBlockColor:"black",borderWidth:.7,borderRadius:4,alignItems:"center",justifyContent:"center"}}>
                       
                       {seats.includes(item)?
                       (<Text style={{backgroundColor:"#FFD73B",padding:5.5}}>{item}</Text>)
                       :
                     (  <Text>{item}</Text>)
                       }
                        
                    </Pressable>
                }>

                </FlatList>
            </View>



            <View style={{ backgroundColor: "#D8D8D8", width: "100%", height: 80, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: 25, height: 25, backgroundColor: "#FFD73B", borderRadius: 3 }} >
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 10 }}>Selected</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginHorizontal: 25 }}>
                    <View style={{ width: 25, height: 25, backgroundColor: "white", borderRadius: 3 }} >
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 10 }}>vacent</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: 25, height: 25, backgroundColor: "gray", borderRadius: 3 }} >
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 10 }}>Occupied</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 20, width: "100%", height: 50 }}>
                <View >
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>Show end time approx 6:51pm </Text>
                    {seats.length>0?
                    showSeats()
                    :
                
                    <Text style={{ fontSize: 18, fontWeight: 400 }}>No Seats Selected </Text>
}
                </View>
                <View style={{
                    backgroundColor: "#D8D8D8", height: 50, 
                      width: "40%",borderTopLeftRadius:6,borderBottomLeftRadius:6,padding:8
                }}>
                    <Text style={{ width:100,fontSize: 14 , fontWeight: 400,  }}>Now with ticket cancellation </Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#FFD73B", width: "100%", height: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between" ,padding: 15 }}>
                
                {
                    seats.length?
                    (<Text> {seats.length} Seat's selected</Text>)
                    :<Text></Text>
                }
                <Pressable onPress={()=>subscribe()}>
                <Text style={{ fontSize: 20, fontWeight: 400,  }}>PAY {total}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}