/**
 * @providesModule FormItem
 **/

import React from 'react'
import { View } from 'react-native'

export default ({ label, input }) => (
  <View>
    {label}
    {input}
  </View>
)
