import model from './model.js'

export default {
  Query: {
    users: async (_, {pagination, search}) => {
        return  await model.GET_USERS({
            page: pagination?.page || 1,
            limit: pagination?.limit || 10,
            search
        });
    },
  },

  Mutation: {
    addUser: async (_, args) => {
        let user =  await model.ADD_USER(args)
        return {
            status: 201,
            message: "new user added",
            data: user
        }
    }
  }
};