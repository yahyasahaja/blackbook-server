import bcrypt from 'bcrypt'
import db from '../../models'
import jwt from 'jsonwebtoken'
import { JWT, USER_TYPE, MEMBER_SCOPE, ADMIN_SCOPE, USER_SCOPE } from '../../config'

export default async (obj, { email, password, name, role }) => {
  try {
    const duplicatedUser = await db.models.User.findOne({
      where: {
        email
      }
    })

    if (duplicatedUser) throw new Error('User with same email already exist')

    const user = await db.models.User.create({
      email,
      name,
      password: await bcrypt.hash(password, 12),
      role
    })

    let token = jwt.sign(
      {
        scope: 
          role === USER_TYPE.ADMIN 
            ? ADMIN_SCOPE 
            : role === USER_TYPE.MEMBER 
              ? MEMBER_SCOPE 
              : USER_SCOPE,
        userId: user.id,
        userType: role
      },
      JWT.SECRET_KEY
    )

    return token
  } catch (err) {
    return err
  }
}
