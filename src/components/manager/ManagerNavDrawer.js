import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Header, Button, Card, CardSection } from '../common'
import { signUserOut, clearState } from '../../actions'

class ManagerNavDrawer extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Header headerText='Manager Nav' />
        <Card>
          <CardSection>
            <Button onPress={() => navigate('employeeList')}>
              Employee List
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => navigate('createSchedule')}>
              Create Schedule
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

export default connect(null, { signUserOut, clearState })(ManagerNavDrawer)
