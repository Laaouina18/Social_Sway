import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const User = ({userprop}) => {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.img} source={{uri : userprop.img}}/>
      <View style={styles.postInfo}>
        <Text>{userprop.country}</Text>
        <Text>{userprop.photos.length}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer : {
    display : 'flex',
    flexDirection : "column",
    alignItems : "center"
  },
  img : {
    width : '90%',
    height : 350,
    borderRadius : 20,
    marginTop : 10,
    marginBottom : 10
  },
  postInfo : {
    width : "100%",
    display : "flex",
    flexDirection : "row",
    justifyContent: "space-around"
  }
})

export default User