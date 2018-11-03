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
    cooldown: Int!
  }

  type Status {
    id: ID!
    level: Int!
    strength: String!
    attack: String!
    agility: String!
    speed: String!
    intelligence: String!
    armor: String!
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
    tipes_video_url: String!
    abilities: [Ability!]!
    status: [Status!]!
    comments: [Comment!]!
  }

  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
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
    # "customer login and get user token"
    # customerLogin(email: String!, password: String!): String!

    # "customer registration and get user token"
    # customerRegister(
    #   email: String!
    #   password: String!
    #   name: String!
    # ): String!

    # "update customer profile"
    # updateCustomer(input: UpdateCustomerInput!): String!

    # "verify email verification token"
    # verifyCustomerToken(token: String): Customer

    # #RESTAURANT ADMIN
    # "restaurant admin login, and get user token"
    # restaurantAdminLogin(email: String!, password: String!): String!

    # "update Restaurant Admin"
    # updateRestaurantAdmin(input: UpdateCustomerInput!): RestaurantAdmin

    # "verify email verification token"
    # verifyRestaurantAdminToken(token: String): RestaurantAdmin

    # #RESTAURANT
    # updateRestaurant(input: UpdateRestaurantInput!): Restaurant

    # #"verify email verification token"
    # #verifyRestaurant(token: String!): Restaurant

    # #TRANSACTION
    # "create a new order"
    # createOrder(restaurant_id: ID!): Order
    
    # "mark order as paid (for restaurant admin)"
    # markOrderAsPaid(token: ID!): Order

    # "add order item to order (for restaurant admin)"
    # addOrderItemsToOrder(token: String!, order_items: [OrderItemInput!]!): Order

    # "remove order item to order (for restaurant admin)"
    # removeOrderItemsFromOrder(token: String!, order_item_ids: [ID!]!): Order

    # "update order item to order (for restaurant admin)"
    # replaceOrderItemsInOrder(token: String!, order_items: [OrderItemInput!]!): Order

    # "pay order using T-Pay"
    # payOrder(order_id: ID!): Order

    #UPLOADS
    singleUpload(file: Upload!): File!
    multipleUpload(files: [Upload!]!): [File!]!
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
