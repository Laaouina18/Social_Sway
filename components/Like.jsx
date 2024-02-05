import { Pressable, Alert } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
const Like = ({ title, description, icon, action }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(action);
        Alert.alert(
          title,
          description,
          [
            {
              text: 'ok',
              style: 'cancel',
            },
          ],
        );
      }}
    >
      <Icon name={icon} color='white' size={26} style={{ marginRight: 10 }} />
    </Pressable>
  );
};

export default Like;
