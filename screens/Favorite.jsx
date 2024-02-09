import { View, Image, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Favorite = () => {

  const likes = useSelector((state) => state.Likes)
  const {height} = Dimensions.get('screen')

  return (
    <ScrollView>
      {
        likes.length > 0 ? likes.map((user) => (
          user.photos.map((pic, i) => (
            <View style={styles.constainer}>
              <Image key={i} source={{uri : pic.url}} style={styles.img}/>
              <Text style={{textAlign : 'center'}}>{pic.title}</Text>
            </View>
          ))
        ))
        : 
        <View style={{height : height,position : 'relative', top : '40%'}}>
          <Text style={{textAlign : 'center'}}>il n'esxite aucune photo</Text>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  constainer : {
    margin : 10,
    marginBottom : 20
  },
  img : {
    width : '90%',
    height : 300,
    borderRadius : 20,
    marginRight :'auto',
    marginLeft: 'auto',
  }
})

export default Favorite