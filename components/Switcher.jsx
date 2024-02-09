import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'


const Switcher = ({titre} ) => {

  const [up, setUp] = useState(true)

  return (
    <View style={styles.switcher}>
      <View>
        <Text style={{fontWeight: '600', fontSize : 17}}>{titre}</Text>
      </View>
      <Switch
        trackColor={{false: 'gray', true: 'orange'}}
        thumbColor={switcher ? 'white' : '#ccc'}
        onValueChange={() =>setUp(s=> !s)}
        value={up}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switcher : {
    flex : 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

export default Switcher