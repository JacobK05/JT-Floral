const { User, Service, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find().populate('carts');
        },

        user: async (parent, { username }) => {
            return await User.findOne({ username }).populate('carts');
        },    
        
        services: async () => {
            return await Service.find({});
        },

        service: async (parent, { name }) => {
            return await Service.findOne({ name });
        },

        carts: async () => {
            return await Cart.find().populate('services');
        },

        cart: async (parent, { _id }) => {
            return await Cart.findById(_id).populate('services');

        },

    },    

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        addService: async (parent, { name, price, image, cartId }) => {
            const newService = await Service.create({ name, price, image });
            const updatedCart = await Cart.findOneAndUpdate(
                { _id: cartId },
                { $addToSet: { services: newService._id } }
            );
            return newService;
        },

        addCart: async (parent, { event, userId }) => {
            const newCart = await Cart.create({ event });
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { carts: newCart._id } }
            );
            return newCart;
        },

        // addReserve: async (parent, { name, service, description, price }) => {
        //     const newReserve = await Reserve.create({ name, service, description, price });
        //     return newReserve;
        // },

        // removeReserve: async (parent, { reserveId }) => {
        //     return await Reserve.findOneAndDelete({ _id: reserveId });
        // },
    },    
};



module.exports = resolvers;