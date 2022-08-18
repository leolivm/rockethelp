import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Details, Register } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()
const options = {
  headerShown: false,
}

export const AppRoutes: FC = () => (
  <Navigator screenOptions={options}>
    <Screen name="home" component={Home} />
    <Screen name="new" component={Register} />
    <Screen name="details" component={Details} />
  </Navigator>
)
