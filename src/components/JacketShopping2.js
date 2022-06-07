import React from "react";
import { View, Text, StyleSheet, FlatList, Image ,TextInput } from "react-native";
import { Feather,Ionicons } from '@expo/vector-icons';


const JacketShopping2 = () => {
  const data = [
                {name: "Brown Jacket", phone: "Dog", year: "$99", uri: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"},
                {name: "Blue Jacket", phone: "Cat",year: "$80", uri: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80"},
                {name: "Biker Jacket", phone: "Dog",year: "$140", uri: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"},
                {name: "Black Jacket", phone: "Dog",year: "$115",uri: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
            
]

  return (
    <View style={styles.container}>
      <View styles={styles.topnav}>
     <View>
          <Ionicons name="arrow-back" size={24} color="black" /></View>
      <View>
          <Feather name="shopping-cart" size={24} color="black" style={{alignItems:"flex-end"}} /></View>
      </View>
         <View style={styles.searchbar}>
         <Text style={{fontSize: 30 }}>Male Jacket</Text>
            <TextInput style={styles.SearchInput}placeholder='Search Jacker' />
        </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item  }) => (
            
          <View style={styles.details}>
              
          <View style={styles.ImageCont}>
              <Image source={{uri: item.uri}} 
             style={{width: 180, height: 200, borderRadius: 22,  resizeMode: "cover", }} />
                
          </View>
          <View  style={styles.contact}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
            <Text style={styles.year}>{item.year}</Text>
            <Text  style={styles.location}>{item.location}</Text>
          </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  SearchInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    width: "100%",
    borderRadius: 10,
    borderColor: "grey",
    padding: 5,
    backgroundColor: "white"
  },
   details: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderTopWidth: 1,
    borderColor: "#eee",
    
    },

  
   contact: {
    flex: 4,
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth: 1,
    marginTop: 25,
    backgroundColor: "white",
    height: 140,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
   },

   name: {
      fontSize: 25,
     
   },

   year: {
      fontSize: 20,
    color: "rgb(51,153,255)"
   },

  topnav: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

});
export default JacketShopping2;
