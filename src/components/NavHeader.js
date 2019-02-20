// import libraries for making a Component
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { withNavigation } from 'react-navigation'


// make a Component
class NavHeader extends Component {

  render() {
    const { titleStyle, topViewStyle, buttonStyle, imageStyle, titleHolderStyle} = styles
    const { headerText, navigation } = this.props

    return (
      <View style={topViewStyle}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={buttonStyle}>
          <Image
            source={require('../static/menu.png')}
            style={imageStyle} />
        </TouchableOpacity>
        <View style={titleHolderStyle}>
          <Text style={titleStyle}>{headerText}</Text>
        </View>
      </View>
    )
  }
}

//define styling
const styles = {
  topViewStyle: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
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
  buttonStyle: {
    height: '100%',
    width: 50,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 20,
    width: 20
  },
  titleHolderStyle: {
    width: '100%',
    marginLeft: -50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20
  },
}

// make the component available to other parts of the app
export default withNavigation(NavHeader)
