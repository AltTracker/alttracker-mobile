import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import styled from 'styled-components/native'

import PageContainer from '../PageContainer'
import FormLabel from '../Label'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const DateValue = styled.Text`
  color: white;
  height: 74px;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 18px;

  border-color: white;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  padding: 10px;
`

export default class DatePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedStartDate: null,
      isShowDatePicker: false
    }
  }

  onDateChange = date => {
    this.setState({ selectedStartDate: date })
    this.hideDatePicker()
  }

  showDatePicker = () => {
    this.setState({ isShowDatePicker: true })
  }

  hideDatePicker = () => {
    this.setState({ isShowDatePicker: false })
  }

  render() {
    const { selectedStartDate } = this.state
    const startDate = selectedStartDate ? selectedStartDate.toString() : ''

    return (
      <PageContainer>
        <FormLabel>Date</FormLabel>
        <TouchableHighlight onPress={this.showDatePicker} underlayColor='white'>
          <DateValue>{startDate}</DateValue>
        </TouchableHighlight>
        <DateTimePicker
          isVisible={this.state.isShowDatePicker}
          onConfirm={this.onDateChange}
          onCancel={this.hideDatePicker}
        />
      </PageContainer>
    )
  }
}
