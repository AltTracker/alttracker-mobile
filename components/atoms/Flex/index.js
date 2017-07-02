/**
 * @providesModule Flex
 **/

import React, { Component } from 'react'
import StyledFlex from './Flex'

// flex-direction (dir)
const flexDirection = ({
  'ltr': 'row',
  'rtl': 'row-reverse',
  'ttb': 'column',
  'btt': 'column-reverse',
  'default': 'row'
})

// wrap (flex-wrap)
const flexWrap = ({
  'none': 'nowrap',
  'wrap': 'wrap',
  [true]: 'wrap',
  'reverse': 'wrap-reverse',
  'default': 'nowrap'
})

// just (justify-content)
const justifyContent = ({
  's': 'flex-start',
  'e': 'flex-end',
  'c': 'center',
  'b': 'space-between',
  'a': 'space-around',
  'default': 'flex-start'
})

// align (align-items)
const alignItems = ({
  's': 'flex-start',
  'e': 'flex-end',
  'c': 'center',
  'b': 'baseline',
  'f': 'stretch', // fill
  'default': 'flex-start'
})

// justGroups (align-content)
const alignContent = ({
  's': 'flex-start',
  'e': 'flex-end',
  'c': 'center',
  'b': 'space-between',
  'a': 'space-around',
  'f': 'stretch', // fill
  'default': 'stretch'
})

// self (align-self)
const alignSelf = ({
  's': 'flex-start',
  'e': 'flex-end',
  'c': 'center',
  'b': 'baseline',
  'f': 'stretch', // fill
  'default': 'auto'
})

const pathOr = (map, path) => path in map ? map[path] : map['default']

/**
 * Reusable, General, Flexible (lol) Flex Component
 * Pass tag to use dynamic tags (<Flex tag='main' />)
 * Contains multiple shorthands for flex settings:
 * set prop to set value based on mapping above
 * i.e.
 * setting @prop 'self' as 's' will make component use `align-self: 'flex-start'`
 **/
class Flex extends Component {
  static defaultProps = {
    h: 'auto',
    w: 'auto'
  }

  render () {
    const { w, h, dir, wrap, justGroups, self, c, just, align, style, styleName, className } = this.props

    return (
      <StyledFlex
        h={h}
        w={w}
        style={style}
        styleName={styleName}
        className={className}
        flexDirection={pathOr(flexDirection, dir)}
        flexWrap={pathOr(flexWrap, wrap)}
        justifyContent={pathOr(justifyContent, just)}
        alignItems={pathOr(alignItems, align)}
        alignContent={pathOr(alignContent, justGroups)}
        alignSelf={pathOr(alignSelf, self)}
        children={this.props.children}
      />
    )
  }
}

export default Flex
