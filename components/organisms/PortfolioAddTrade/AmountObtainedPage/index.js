import React from 'react'

import PageContainer from '../PageContainer'
import FormLabel from '../Label'
import FormInput from '../Input'

export default ({ children, progress, ...props }) => {
  const style = {
    transform: [{
      translateY: progress.interpolate({
        inputRange: [-0.5, 0, 0.5],
        outputRange: [250, 0, -250]
      })
    }]
  }

  return (
    <PageContainer>
      <FormLabel style={style}>Amount</FormLabel>
      <FormInput placeholder='0' type='number' onChange={_ => {}} />
    </PageContainer>
  )
}
