import React, { ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from 'react-redux'
import { Text, StyleSheet, Modal, View, ScrollView, Pressable } from 'react-native'

const Setting = ({child, transparent, visible} ) => {

  return (
      <Modal 
        animationType='slide'
        visible={visible}
        transparent={transparent}
      >
        {child}
      </Modal>
  )
}

export default Setting