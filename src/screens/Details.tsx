import { FC } from 'react'
import { Text, VStack } from 'native-base'
import { useRoute } from '@react-navigation/native'

import { Header } from '../components'

type RouteParams = {
  orderId: string
}

export const Details: FC = () => {
  const { params } = useRoute()
  const { orderId } = params as RouteParams

  return (
    <VStack flex="1" bg="gray.700">
      <Header title="solicitação" />

      <Text color="white">{orderId}</Text>
    </VStack>
  )
}
