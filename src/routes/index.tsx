import { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'

export const Routes: FC = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
)
