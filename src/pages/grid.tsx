import { Content, Header, View } from '@adobe/react-spectrum'
import ReactDOM from 'react-dom'
import { Layout } from '../components'

ReactDOM.render(
  <Layout.Common>
    <Index />
  </Layout.Common>,
  document.querySelector('#root')
)

function Index() {
  return <View>grid</View>
}
