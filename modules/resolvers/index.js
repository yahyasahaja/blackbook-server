import { GraphQLUpload } from 'apollo-upload-server'

//MODELS
import db from '../../models'

export default {
  Upload: GraphQLUpload,
  Hero: {
    abilities: async hero => {
      return await hero.getAbilities()
    },
    status: async hero => {
      return await hero.getStatus()
    },
    comments: async hero => {
      return await hero.getComments()
    },
  },
  Comment: {
    user: async comment => {
      return await comment.getUser()
    }
  },
  //for (let i in restaurant) if (i.indexOf('get') != -1) console.log(i)\
  Query: {
    // allRestaurants,
    // restaurant,
    // allRestaurantMenus,
    // restaurantMenu,
    // allOrders,
    // order,
    // allCategories,
    // uploads: () => db.models.Upload.findAll(),
  },
  Mutation: {
    // customerLogin,
    // customerRegister,
    // restaurantAdminLogin,
    // addOrderItemsToOrder,
    // removeOrderItemsFromOrder,
    // replaceOrderItemsInOrder,
    // markOrderAsPaid
  }
}
