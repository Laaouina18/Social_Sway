import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { DATA } from '../data/usersData';
import { useNavigation } from '@react-navigation/native';

const Accueil = () => {
  const navigation = useNavigation();
  const data = DATA;

  return (
    <ScrollView>
      {data.map((user, index) => (
        <Pressable key={index} onPress={() => navigation.navigate('Profile', { portfolio: user })}>
          <View style={styles.postContainer}>
            <Image style={styles.img} source={{ uri: user.img }} />
            <View style={styles.postInfo}>
              <Text>{user.country}</Text>
              <Text>{user.photos.length} photos</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: '90%',
    height: 350,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  postInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Accueil;
