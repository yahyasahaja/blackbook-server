import { JWT, USER_TYPE, ADMIN_SCOPE, MEMBER_SCOPE, USER_SCOPE } from '../../config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from '../../models'

export default async (obj, { email, password }) => {
  try {
    const user = await db.models.User.findOne({ where: { email } })
    const role = user.role

    if (!user) throw new Error('No user matches with that email')

    if (!await bcrypt.compare(password, user.password)) {
      throw new Error('Invalid Password')
    }
    
    // console.log(user.id)
    return jwt.sign(
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
  } catch (err) {
    throw err
  }
}
