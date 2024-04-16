const { User, Service, userService } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('services');
        },
        
        services: async () => {
            return await Service.find({}).populate('users');
        }
     }
};

module.exports = resolvers;