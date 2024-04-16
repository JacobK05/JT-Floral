const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Service {
    _id: ID
  service: String
  description: String
  price: Int
}

type userService {
    _id: ID
    name: String
    service: String
    description: String
    price: Int

}

type Query {
    users: [User]
  user(_id: ID!): User
  services: [Service]
  service(_id: ID!): Service
}`

module.exports = typeDefs;