import { FC, useState } from 'react'
import { SignOut, ChatTeardropText } from 'phosphor-react-native'
import {
  VStack,
  HStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from 'native-base'

import { Filter, Order, Button } from '../components'

import Logo from '../assets/logo_secondary.svg'

type Status = 'open' | 'closed'

export type OrderType = {
  id: string
  patrimony: string
  when: string
  status: string
}

export const Home: FC = () => {
  const [statusSelected, setStatusSelected] = useState<Status>('open')
  const [orders, setOrders] = useState<OrderType[]>([])

  const { colors } = useTheme()

  return (
    <VStack flex="1" pb="6" bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt="16"
        pb="1"
        px="6"
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex="1" px="6">
        <HStack
          w="full"
          mt="8"
          mb="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space="3" mb="8">
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt="6" textAlign="center">
                Você ainda não possui {'\n'}
                solicitações{' '}
                {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  )
}
