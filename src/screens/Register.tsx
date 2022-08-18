import { FC } from 'react'
import { VStack } from 'native-base'

import { Header, Input, Button } from '../components'

export const Register: FC = () => {
  return (
    <VStack flex="1" p="6" bg="gray.600">
      <Header title="Nova solicitação" mt="4" />

      <Input placeholder="Nome do patrimônio" />

      <Input
        placeholder="Descrição do problema"
        flex="1"
        mt="5"
        multiline
        textAlignVertical="top"
      />

      <Button title="Cadastrar" mt="5" />
    </VStack>
  )
}
