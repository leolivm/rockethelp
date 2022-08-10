import { FC, useState } from 'react'
import { Envelope, Key } from 'phosphor-react-native'
import { Heading, VStack, Icon, useTheme } from 'native-base'

import { Input, Button } from '../components'

import Logo from '../assets/logo_primary.svg'

export const SignIn: FC = () => {
  const { colors } = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    return { email, password }
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px="8" pt="24">
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt="20" mb="6">
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        mb="4"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml="4" />
        }
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        mb="8"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml="4" />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  )
}
