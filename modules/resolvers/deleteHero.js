import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { id }, { scope }) => {
  if (scope.includes('deleteHero')) {
    try {
      let hero = await db.models.Hero.findById(id)

      if (!hero) throw new Error('Hero id is not exist')
      
      return await hero.destroy()
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
