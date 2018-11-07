import { makeExecutableSchema } from 'graphql-tools'
import gql from 'graphql-tag'

import resolvers from './resolvers'

const typeDefs = gql`
  scalar Upload

  enum UserRole {
    ADMIN
    MEMBER
    USER
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
    profpic_url: String
  }

  type Ability {
    id: ID!
    name: String!
    image_url: String!
    description: String!
    mana: String!
    cooldown: String!
    video_url: String!
  }

  type Status {
    id: ID!
    level: Int!
    strength: Float!
    attack: Float!
    agility: Float!
    speed: Float!
    intelligence: Float!
    armor: Float!
  }

  type Comment {
    id: ID!
    comment: String!
    video_url: String!
    image_url: String!
    user: User!
  }

  type Hero {
    id: ID!
    name: String!
    image_url: String!
    bio: String!
    tips_desc: String!
    tips_video_url: String!
    abilities: [Ability!]!
    statuses: [Status!]!
    comments: [Comment!]!
  }

  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input AbilitiesInput {
    name: String!
    image_url: String!
    description: String!
    mana: String!
    cooldown: String!
    video_url: String
  }

  input StatusesInput {
    level: Int!
    strength: Float!
    attack: Float!
    agility: Float!
    speed: Float!
    intelligence: Float!
    armor: Float!
  }

  input CommentInput {
    comment: String!
    video_url: String!
    image_url: String!
  }

  type Query {
    "get a user"
    user(id: ID): User!

    "get a hero"
    hero(id: ID!): Hero!

    "get all heroes"
    allHeroes: [Hero!]!

    #UPLOADS
    uploads: [File]
  }

  "mutation"
  type Mutation {
    #CUSTOMER
    "user login and get user token"
    login(email: String!, password: String!): String!

    "user registration and get user token"
    register(
      email: String!
      password: String!
      name: String!
      role: UserRole
    ): String!

    "update user profile"
    updateUser(
      email: String
      name: String
      newPassword: String
      currentPassword: String
      profpic_url: String
    ): User!

    "add a comment"
    addComment(
      heroId: ID!
      comment: String!
      video_url: String
      image_url: String
    ): Comment!

    "update a comment"
    updateComment(
      id: ID!
      comment: String!
      video_url: String
      image_url: String
    ): Comment!

    "delete comment by id"
    deleteComment(id: ID!): String!

    "add new hero"
    addHero(
      name: String!
      image_url: String!
      bio: String!
      tips_desc: String!
      tips_video_url: String!
      abilities: [AbilitiesInput!]!
      statuses: [StatusesInput!]!
    ): Hero

    "update a hero"
    updateHero(
      id: ID!
      name: String!
      image_url: String!
      bio: String!
      tips_desc: String!
      tips_video_url: String!
      abilities: [AbilitiesInput!]!
      statuses: [StatusesInput!]!
    ): Hero

    "delete a hero by id"
    deleteHero(id: ID!): String!

    #UPLOADS
    singleUpload(file: Upload!): File!
    multipleUpload(files: [Upload!]!): [File!]!
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
