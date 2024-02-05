import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useSelector } from 'react-redux'; 

const Favorite = () => {
  const { Likes } = useSelector((state) => state);
  const { height } = Dimensions.get('screen');

  return (
    <ScrollView>
      {Likes.length > 0 ? (
        Likes.map((user) =>
          user.photos.map((pic, i) => (
            <View style={styles.constainer} key={i}>
              <Image source={{ uri: pic.url }} style={styles.img} />
              <Text style={{ textAlign: 'center' }}>{pic.title}</Text>
            </View>
          ))
        )
      ) : (
        <View style={{ height: height, position: 'relative', top: '40%' }}>
          <Text style={{ textAlign: 'center' }}>Aucune Image à afficher</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    margin: 10,
    marginBottom: 20,
  },
  img: {
    width: '90%',
    height: 300,
    borderRadius: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default Favorite;
