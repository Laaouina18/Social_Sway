import { View, Text, ScrollView, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Profile = ({route, navigation}) => {


  const user = route.params.userprop;

  return (
    <ScrollView>
      <View style={[styles.header, {backgroundColor: user.favColor}]}>
        <View style={styles.img}>
          <Image style={{width: '100%', aspectRatio: 1, borderRadius: 100}} source={{uri : user.img}}/>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>Bio</Text>
        <Text style={styles.bioDescription}>{user.desc}</Text>
      </View>
      <View style={styles.photoContainer}>
        {
          user && user.photos.map((post, index) => (
            <Pressable key={index} onPress={() => navigation.navigate('Post', {post})}>
              <Image style={{width: '100%', aspectRatio : 1}} source={{uri : post.url}}/>
              <Text style={styles.photoTitle}>{post.title}</Text>
            </Pressable>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    height : 300,
  },
  img : {
    width : 200,
    aspectRatio : 1,
    borderRadius : 100,
    borderStyle : 'solid',
    borderWidth : 6,
    borderColor : 'white'
  },
  bioContainer : {
    width : '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bio : {
    fontSize : 23,
    fontWeight : 'bold',
    marginTop : 10,
    marginBottom : 10,
  },
  bioDescription : {
    fontSize : 18,
    width : '80%',
    lineHeight : 25,
    marginBottom : 20,
  },
  photoContainer : {
    flex : 1,
    gap: 20,
  },
  photoTitle : {
    backgroundColor : 'rgba(11, 11, 11, 0.49)',
    position: 'absolute',
    width : '100%',
    bottom : 0,
    padding : 10,
    color : 'white',
    fontWeight: '600',
  },
  backDrop : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#232f34",
    opacity: 0.32
  },
  alertBox: {
    maxWidth: 300,
    height : 200,
    backgroundColor: 'white',
    margin: 48,
    elevation: 24,
    borderRadius: 2,
  },
})

export default Profile