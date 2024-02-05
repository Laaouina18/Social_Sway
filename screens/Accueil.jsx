import React from 'react';
import { ScrollView, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Setting from '../components/param';
import user from '../components/user';
import test from '../components/test';
import { useSelector, useDispatch } from 'react-redux'; 
import { hidePost, showPost } from '../redux/ActionTypes';


const Accueil = ({ navigation }) => {
  const dispatch = useDispatch(); 
  const { settingModalVisible, data } = useSelector((state) => state); 

  return (
    <ScrollView>
      {data &&
        data.map((User, index) => (
          <Pressable key={index} onPress={() => navigation.navigate('Profile', { User })}>
            <user user={user} />
          </Pressable>
        ))}
      <test transparent={false} modalVisible={settingModalVisible}>
        <Setting />
      </test>
    </ScrollView>
  );
};

export default Accueil;
