import { Pressable, Alert } from 'react-native'
import { useAppDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import React from 'react'
import { useDispatch } from 'react-redux'



const Like = ({titre, description, icon, action}) => {

  const dispatch = useDispatch();

  return (
    <Pressable onPress={() => {
      dispatch(action)
      Alert.alert(
        titre,
        description,	
        [
          {
            text: 'ok',
            style: 'cancel',
          },
        ],
      )
  }}>
    <Icon name={icon} color='white' size={26} style={{marginRight: 10}} />
  </Pressable>
  )
}

export default Like