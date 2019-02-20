import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Header, Button, Card, CardSection } from '../common'
import { signUserOut } from '../../actions'

class EmployeeNavDrawer extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Header headerText='Employee Nav' />
        <Card>
          <CardSection>
            <Button onPress={() => navigate('employeeMain')}>
              Employee Main
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.props.signUserOut()}>
              Sign Out
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default connect(null, { signUserOut })(EmployeeNavDrawer)
