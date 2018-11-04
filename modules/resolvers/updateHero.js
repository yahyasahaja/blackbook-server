import db from '../../models'
// import { JWT, USER_TYPE } from '../../config'

export default async (obj, { 
  id,
  name,
  image_url,
  bio,
  tips_desc,
  tips_video_url,
  abilities,
  statuses,
}, { scope }) => {
  if (scope.includes('updateHero')) {
    try {
      let hero = await db.models.Hero.findById(id)

      if (!hero) throw new Error('Comment id is not exist')
      
      let input = { 
        name,
        image_url,
        bio,
        tips_desc,
        tips_video_url,
      }

      for (let key in input) hero[key] = input[key]
      //save
      await hero.save()
      await hero.removeAbilities([])
      await hero.addAbilities(abilities)
      await hero.removeStatuses([])
      await hero.addStatuses(statuses)
      
      return hero
    } catch (error) {
      throw error
    }
  } else {
    throw new Error('Permission Denied')
  }
}
