const { GraphQLList } = require('graphql');
const authenticated = require('../../utils/authenticated');
const FormType = require('../../types/FormType');
const getRole = require('../../utils/getRole');
const Form = require('../../models/Form');

module.exports = {
    type: GraphQLList(FormType),
    description: 'Get information of a list of forms',
    resolve: authenticated(async (root, args, context) => {
        return await Form.find(
            Object.assign(
                {},
                getRole(context) === 'HACKER' && {
                    open: true,
                },
            ),
        );
    }),
};
