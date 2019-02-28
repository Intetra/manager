import React, { Component } from 'react'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { daySelect } from '../../actions'
import NavHeader from '../NavHeader'
import { Card, CardSection, Button } from '../common'

class CreateSchedule extends Component {

  weekDayPressed(weekday) {
    const day = weekday.toLowerCase()
    this.props.daySelect(day)
    console.log(this.props[day])
  }

  renderWeekdays() {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
    const { weekDayButtonStyle, weekDayTextStyle } = styles
    return (
      <Card>
        {weekdays.map( (weekday) =>
          <CardSection key={weekday}>
            <TouchableHighlight
              style={weekDayButtonStyle}
              onPress={() => this.weekDayPressed(weekday)}
            >
              <Text style={weekDayTextStyle}>{weekday}</Text>
            </TouchableHighlight>
          </CardSection>
        )}
      </Card>
    )
  }

  render() {
    return (
      <View>
        <NavHeader headerText='Create Schedule' />
        <ScrollView>
          <Card>
            <CardSection>
              <Text>What days of the week are you open?</Text>
            </CardSection>
          </Card>
          {this.renderWeekdays()}
          <Card>
            <CardSection>
              <Button>Confirm</Button>
            </CardSection>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  weekDayButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  weekDayTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

const mapStateToProps = state => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday
  } = state.schedule
  return { monday, tuesday, wednesday, thursday, friday, saturday, sunday }
}

export default connect(mapStateToProps, { daySelect })(CreateSchedule)
