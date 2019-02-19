import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection }
