// import libraries for making a Component
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// make a Component
class Header extends Component {
  renderLeftButton() {
    const { leftButton, leftOnClick } = this.props
    let left = ''
    if (leftButton) {
      left = leftButton
    }
    return (
      <TouchableOpacity onPress={leftOnClick} style={styles.buttonStyle}>
        <Text>{left}</Text>
      </TouchableOpacity>
    )
  }

  renderRightButton() {
    const { rightButton, rightOnClick } = this.props
    let right = ''
    if (rightButton) {
      right = rightButton
    }
    return (
      <TouchableOpacity onPress={rightOnClick} style={styles.buttonStyle}>
        <Text>{right}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { textStyle, viewStyle } = styles

    return (
      <View style={viewStyle}>
        {this.renderLeftButton()}
        <Text style={textStyle}>{this.props.headerText}</Text>
        {this.renderRightButton()}
      </View>
    )
  }
}

//define styling
const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    width: '100%',
    paddingTop: 30,
    position: 'relative',
    //shadow settings
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // elevation gets shadows working on android
    elevation: 3,
    //zIndex gets shadows working on iOS
    zIndex: 999
  },
  textStyle: {
    fontSize: 20
  },
  buttonStyle: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

// make the component available to other parts of the app
export { Header }
