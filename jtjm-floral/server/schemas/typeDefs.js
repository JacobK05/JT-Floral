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

type Reserve {
  _id: ID
  name: String
  service: String
  description: String
  price: Int
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  services(username: String): [Service]
  reserves: [Reserve]
  reserve(_id: ID!): Reserve
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addReserve(name: String!, service: String!, description: String!, price: Int!): Reserve
  removeReserve(reserveId: ID!): Reserve
}`

module.exports = typeDefs;