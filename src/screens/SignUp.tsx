import { FC, useState } from 'react'
import { Alert } from 'react-native'
import { Envelope, Key } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { Heading, VStack, Icon, useTheme } from 'native-base'

import { api } from '../services'
import { Input, Button, Header } from '../components'

import Logo from '../assets/logo_primary.svg'

export const SignUp: FC = () => {
  const { colors } = useTheme()
  const { goBack } = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUn = async () => {
    if (!email || !password)
      return Alert.alert('Cadastrar', 'Informe e-mail e senha.')

    setLoading(true)

    api
      .post('/signup', {
        email,
        password,
      })
      .then((res) => {
        Alert.alert('Cadastro', 'Usuário cadastrado com sucesso.')
        setLoading(false)
        goBack()
      })
      .catch((err) => {
        Alert.alert('Erro no cadastro', err.response.data.message)
        setLoading(false)
      })
  }

  return (
    <>
      <Header title="voltar" />
      <VStack flex={1} alignItems="center" bg="gray.600" px="8" pt="16">
        <Logo />

        <Heading color="gray.100" fontSize="xl" mt="20" mb="6">
          Cadastre sua conta
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
          InputLeftElement={
            <Icon as={<Key color={colors.gray[300]} />} ml="4" />
          }
          secureTextEntry
          onChangeText={setPassword}
        />

        <Button
          title="Cadastrar"
          w="full"
          onPress={handleSignUn}
          isLoading={loading}
        />
      </VStack>
    </>
  )
}
