
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
 
      if (abilities) {
        await hero.addAbilities((await db.models.Ability.bulkCreate(abilities)).map(d => d.id))
      }
      if (statuses) {
        let res = []
        for (let status of statuses) {
          if (status.attack) res.push(status)
        }
        await hero.addStatuses((await db.models.Status.bulkCreate(res)).map(d => d.id))
      }

      return hero
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
