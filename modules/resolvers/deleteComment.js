import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { id }, { scope }) => {
  if (scope.includes('deleteComment')) {
    try {
      let cmt = await db.models.Comment.findById(id)

      if (!cmt) throw new Error('Comment id is not exist')
      
      return await cmt.destroy()
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
