import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Switcher from './Switcher'
import { useDispatch } from 'react-redux'
import { archiffer } from '../redux/actions'

const Param = () => {

  const dispatch = useDispatch();

  return (
    <View>
      	{/* <Pressable onPress={() => dispatch(archiffer())} style={{position : 'absolute', top: '10%', right : 30}}>
          <Icon name='close' size={30} />
        </Pressable>
        <ScrollView style={styles.container}>
          <View style={styles.settingInfo}>
            <Text style={{fontWeight: '700', fontSize : 20, textAlign: 'center'}}>REGLAGES</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium simil</Text>
            <View style={styles.hr} />
          </View>
          <View>
            <Switcher label='Animaux' />
            <Switcher label='Voyages' />
            <Switcher label='Voitures' />
          </View>
          <Pressable onPress={() => alert('hihi')} style={styles.validateBtn}>
            <Text style={{color : 'white', textAlign: 'center', fontWeight : '600'}}>VALIDER LES PARAMETRES</Text>
          </Pressable>
        </ScrollView> */}
		<Text>Test</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    width : '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position : 'relative',
    top : '20%',
  },
  settingInfo : {
    flex : 1,
    flexDirection : 'column',
    gap : 30,
  },
  hr : {
    width : '100%',
    height : 1,
    backgroundColor : 'black',
    borderRadius : 100
  },
  description : {
    lineHeight: 20,
    width : '70%'
  },
  validateBtn : {
    marginTop : 20,
    backgroundColor: 'orange',
    color : 'white',
    padding : 15,
  }
})


export default Param