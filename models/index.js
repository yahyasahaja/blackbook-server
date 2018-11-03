//MODULES

//CONNECTION
import connection from './connection'
import { events, DB_CONNECTED } from '../events'

//MODELS
import Ability from './Ability'
import Hero from './Hero'
import User from './User'
import Status from './Status'
import Comment from './Comment'

//MODEL_RELATIONS
// Customer.hasMany(Order, { foreignKey: 'customer_id' })
// Order.belongsTo(Customer, { foreignKey: 'customer_id' })
Hero.hasMany(Ability, { foreignKey: 'hero_id' })
Ability.belongsTo(Hero, { foreignKey: 'hero_id' })

Hero.hasMany(Status, { foreignKey: 'hero_id' })
Status.belongsTo(Hero, { foreignKey: 'hero_id' })

User.hasMany(Comment, { foreignKey: 'user_id' })
Comment.belongsTo(User, { foreignKey: 'user_id' })

Hero.hasMany(Comment, { foreignKey: 'hero_id' })
Comment.belongsTo(Hero, { foreignKey: 'hero_id' })

//SEEDS
import { giveSeeds } from '../seeders' 

//CONNECT
let force = true

connection
  .sync({
    force
  })
  .then(async () => {
    console.log('database synchronized')

    events.emit(DB_CONNECTED)
    if (force) giveSeeds()
  })
  .catch(err => {
    console.log(err)
  })
  
export default connection
