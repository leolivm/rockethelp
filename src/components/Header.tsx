import { FC } from 'react'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { HStack, IconButton, useTheme, Heading, StyledProps } from 'native-base'

type Props = StyledProps & {
  title: string
}

export const Header: FC<Props> = ({ title, ...rest }) => {
  const { colors } = useTheme()

  const { goBack } = useNavigation()

  const handleGoBack = () => goBack()

  return (
    <HStack
      w="full"
      justifyContent="center"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex="1"
        ml="-6"
      >
        {title}
      </Heading>
    </HStack>
  )
}
