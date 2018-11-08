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
      
      for (let key in input) if (hero[key]) hero[key] = input[key]
      //save
      try {
        await hero.save()
      } catch (err) {
        err
      }
      
      if (abilities) {
        await hero.setAbilities([])
        await db.models.Ability.destroy({where: {hero_id: hero.id}})
        await hero.addAbilities((await db.models.Ability.bulkCreate(abilities)).map(d => d.id))
      }
      if (statuses) {
        await hero.setStatuses([])
        await db.models.Status.destroy({where: {hero_id: hero.id}})
        let res = []
        for (let status of statuses) {
          if (status.attack) res.push(status)
        }
        await hero.addStatuses((await db.models.Status.bulkCreate(res)).map(d => d.id))
      }
      
      return hero
    } catch (error) {
      throw new Error(error)
    }
  } else {
    throw new Error('Permission Denied')
  }
}
