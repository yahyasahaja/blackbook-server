//MODULES
import bcrypt from 'bcrypt'

//DATABASE
// import db from '../db'

//MODELS
import db from '../models/connection'

const {
  Hero,
  Ability,
  Status,
  User
} = db.models

//SEEDS
import statuses from './statuses.js'
import heroes from './heroes.js'
import users from './users.js'
import abilities from './abilities.js'

//SEEDERS
export const giveSeeds = async () => {
  //HEROES
  await Hero.destroy({ where: {}, force: true })
  await Hero.bulkCreate(heroes)

  //ABILITIES
  await Ability.destroy({ where: {}, force: true })
  await Ability.bulkCreate(abilities)

  //STATUSES
  await Status.destroy({ where: {}, force: true })
  await Status.bulkCreate(statuses)

  //USER
  await User.destroy({ where: {}, force: true })
  for (let user of users)
    user.password = await bcrypt.hash(user.password, 12)
  await User.bulkCreate(users)

  // let loc
  // let hero = await Hero.create({
  //   name: 'SOmething',
  //   image: 'ogehuw',
  //   bio: 'ogehuw',
  //   tips_desc: 'ogehuw',
  //   tips_video_url: 'ogehuw',
  // })
  // await hero.destroy()
  // for (let i in hero) if (i.indexOf('remove') != -1) console.log(i, hero[i].toString())
}

export default {
  giveSeeds,
}