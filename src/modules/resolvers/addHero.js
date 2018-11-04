
import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { 
  name,
  image_url,
  bio,
  tips_desc,
  tips_video_url,
  abilities,
  statuses,
}, { scope }) => {
  if (scope.includes('addHero')) {
    try {
      let hero = await db.models.Hero.create({ 
        name,
        image_url,
        bio,
        tips_desc,
        tips_video_url,
      })

      await hero.addAbilities(abilities)
      await hero.addStatuses(statuses)

      return hero
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
