import { GraphQLUpload } from 'apollo-upload-server'

//MODELS
import db from '../../models'
import login from './login'
import register from './register'
import user from './user'
import updateUser from './updateUser'
import singleUpload from './singleUpload'
import multipleUpload from './multipleUpload'
import addComment from './addComment'
import updateComment from './updateComment'
import deleteComment from './deleteComment'

export default {
  Upload: GraphQLUpload,
  Hero: {
    abilities: async hero => {
      return await hero.getAbilities()
    },
    statuses: async hero => {
      return await hero.getStatuses()
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
  //for (let i in restaurant) if (i.indexOf('get') != -1) console.log(i)
  Query: {
    user,
    hero: (_, { id }) => db.models.Hero.findById(id),
    allHeroes: () => db.models.Hero.findAll(),
    uploads: () => db.models.Upload.findAll(),
  },
  Mutation: {
    login,
    register,
    updateUser,
    addComment,
    updateComment,
    deleteComment,
    multipleUpload,
    singleUpload,
  }
}
