import { StackNavigator } from 'react-navigation'
import Portfolio from 'Portfolio'
import PortfolioAddTrade from 'PortfolioAddTrade'

export default StackNavigator({
  Portfolio: { screen: Portfolio },
  PortfolioAddTrade: { screen: PortfolioAddTrade }
}, {
  headerMode: 'none'
})
