import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { heroId, comment, video_url, image_url }, { scope }) => {
  if (scope.includes('addComment')) {
    try {
      let hero = await db.models.Hero.findById(heroId)

      if (!hero) throw new Error('Hero id is not exist')

      return await hero.addComment({ comment, video_url, image_url })
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}