import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { id }, { user, scope }) => {
  if (scope.includes('user')) {
    try {
      return await db.models.User.findById(id || user.id)
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
