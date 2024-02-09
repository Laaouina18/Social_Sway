import { ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import User from '../components/user';
import { useDispatch, useSelector } from 'react-redux';
import Param from '../components/Param';
import { DATA } from '../data/usersData';
import Setting from '../components/Setting';



const Accueil= ({navigation}) => {

  const visible = useSelector((state) => state.visible);
  const data = useSelector((state) => state.data);

  return (
    <ScrollView>
      {
        data && data.map((userprop, index) => (
          <Pressable key={index} onPress={() => navigation.navigate('Profile', {userprop})}>
            <User userprop={userprop} />
          </Pressable>
        ))
      }
      <Setting transparent={false} visible={visible}>
        <Text>Testest</Text>
      </Setting>
    </ScrollView>
  )
}

export default Accueil