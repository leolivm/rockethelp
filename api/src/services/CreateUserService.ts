import { hash } from 'bcrypt'

import { prisma } from '../database'

interface ICreateUser {
  email: string
  password: string
}

export class CreateUserService {
  async handle({ email, password }: ICreateUser) {
    const userExists = await prisma.users.findFirst({
      where: { email },
    })

    if (userExists) {
      throw new Error('User already exists')
    }

    const hashPassword = await hash(password, 8)

    const user = await prisma.users.create({
      data: {
        email,
        password: hashPassword,
      },
    })

    delete user.password

    return user
  }
}
