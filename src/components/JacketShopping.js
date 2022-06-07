import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


const JacketShopping = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navNimg}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.icons}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
          <TouchableOpacity style={styles.icons}><Feather name="shopping-cart" size={24} color="rgb(153,153,225)" /></TouchableOpacity>
        </View>
        <View style={styles.details}>
          <View style={styles.imgCol}>
            <Image source={require("../../assets/jacket1.jpeg")} style={styles.img} />
          </View>
          <TouchableOpacity style={[styles.icons, {position: "absolute", top: 15, left: 288,}]}>
            <AntDesign name="hearto" size={24} color="rgb(153,153,225)" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreDetails}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>Brown Bomber Jacket</Text>

        <Text style={{fontSize: 20, marginVertical: 5,}}>Review : <Rating imageSize={15}/></Text>

        <View style={{width: 50, marginVertical: 15, borderWidth: 2, borderBottomColor: "rgb(153,153,225)"}}></View>

        <Text style={{fontSize: 16}}>It is a long established fact that a reader will be distracted by the readable content of a page.</Text>
        
        <View style={{backgroundColor: "white", marginVertical: 15, padding: 10}}>
          <Text style={{fontSize: 15, color: "rgb(153,153,225)"}}>Material : 91% polyester, 9% elastane</Text>
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
          <TouchableOpacity style={styles.size}>
            <Text style={{color: "black", fontWeight: "bold"}}>XS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={{color: "black", fontWeight: "bold"}}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.size, {backgroundColor: "rgb(153,153,225)"}]}>
            <Text style={{color: "black", fontWeight: "bold"}}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={{color: "black", fontWeight: "bold"}}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={{color: "black", fontWeight: "bold"}}>XL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.total}>
          <View>
            <Text style={{fontSize: 15, fontWeight: "bold", color: "white"}}>Total Amount</Text>
            <Text style={{fontSize: 25, fontWeight: "bold", color: "white"}}>$90.99</Text>
          </View>
          <TouchableOpacity style={styles.add}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  navNimg: {
    flex: 5,
    overflow: "hidden",
  },

  icons: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

  },

  details: {
    flex: 1,
    padding: 10, 
    position: "relative",
  },

  imgCol: {
    backgroundColor: "whitesmoke",
    marginVertical: 15,
    transform: [{skewY: "10deg"}],
    borderRadius: 20,
  },

  img: {
    top: -50,
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },

  moreDetails: {
    flex: 5,
    padding: 10,
  },

  size: {
    height: 45,
    width: 50, 
    backgroundColor: "white", 
    borderRadius: 15, 
    alignItems: "center",
    justifyContent: "center", 
    padding: 5
  },

  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "rgb(153,153,225)",
    padding: 10
  },

  add: {
    height: 45,
    width: 120, 
    backgroundColor: "rgb(51,51,225)", 
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "center", 
    padding: 5
  }
 
});

export default JacketShopping;