// import db from '../../models'
import bcrypt from 'bcrypt'

export default async (obj, { 
  email, 
  name, 
  currentPassword, 
  newPassword,
  profpic_url,
}, { 
    scope, 
    user 
  }) => {
  if (scope.includes('updateUser')) {
    try {
      if (!await bcrypt.compare(currentPassword, user.password)) {
        throw new Error('Invalid Password')
      }

      let input = { email, name, password: newPassword, profpic_url }
      for (let key in input) user[key] = input[key]

      return await user.save()
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
