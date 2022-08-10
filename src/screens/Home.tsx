import { FC, useState } from 'react'
import { SignOut } from 'phosphor-react-native'
import {
  VStack,
  HStack,
  IconButton,
  useTheme,
  Text,
  Heading,
} from 'native-base'

import { Filter } from '../components'

import Logo from '../assets/logo_secondary.svg'

type Status = 'open' | 'closed'

export const Home: FC = () => {
  const [statusSelected, setStatusSelected] = useState<Status>('open')

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
      </VStack>
    </VStack>
  )
}
