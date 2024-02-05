import React, { ReactNode } from 'react';
import { Text, StyleSheet, Modal, View, ScrollView, Pressable } from 'react-native';

const test = ({ children, transparent, modalVisible }) => {
  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
      transparent={transparent}
    >
      {children}
    </Modal>
  );
};

export default test;
