import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Navigator from './src/navigation/TabNavigator'
import InstaApi, { DataProvider } from './src/contexts'

const App = () => (
  <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <DataProvider value={InstaApi}>
      <Navigator />
    </DataProvider>
    </ApplicationProvider>
  </Fragment>
)

export default App