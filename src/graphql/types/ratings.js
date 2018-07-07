import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'



export const RatingType =  new GraphQLObjectType({

    name:"ListRatings",
    description:"Clasificaciones de la BD",
    fields: () => ({

            _id:{
                type:GraphQLNonNull(GraphQLID)
            },
            name:{
                type:GraphQLString
            },
            description:{
                type:GraphQLString
            },
            age:{
                type:GraphQLInt
             },
            is_active:{
               type:GraphQLBoolean
            }

    })


});



export const RatingInputType = new GraphQLInputObjectType({
    name:"AddRating",
    description:"Agrega,modifica nuevas clasificaciones a la bd",
    fields: () => ({

            name:{
                type:GraphQLString
            },
            description:{
                type:GraphQLString
            },
            age:{
                type:GraphQLInt
             }

    })

})