import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { id, comment, video_url, image_url }, { scope }) => {
  if (scope.includes('updateComment')) {
    try {
      let cmt = await db.models.Comment.findById(id)

      if (!cmt) throw new Error('Comment id is not exist')
      
      let input = { comment, video_url, image_url }
      for (let key in input) cmt[key] = input[key]
      return await cmt.save()
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
