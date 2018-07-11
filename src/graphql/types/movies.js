import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
} from 'graphql'

import {GenreType} from './genres';
import {RatingType} from './ratings';
import Genre from '../../models/genres';
import Rating from '../../models/ratings';


export const MovieType =  new GraphQLObjectType({

    name:"ListMovies",
    description:"Usuarios de la BD",
    fields: () => ({

            _id:{
                type:GraphQLNonNull(GraphQLID)
            },
            name:{
                type:GraphQLString
            },
            plot:{
                type:GraphQLString
            },
            genre:{
                type:GenreType,
                resolve(movie){
                    const {genre} = movie
                    return Genre.findById(genre).exec()
                }  
            },
            url:{
                type:GraphQLString
            },
            director:{
                type:GraphQLString,
            },
            year:{
                type:GraphQLString
            },
            rate:{
               type:GraphQLList(GraphQLFloat)
            },   
            rating:{
                type:RatingType,
                resolve(movie){
                    const {rating} = movie
                    return Rating.findById(rating).exec()
                }
            },
            is_active:{
                type:GraphQLBoolean
            },
            upload_at:{
                type:GraphQLString
            }
    })


});



export const MovieInputType = new GraphQLInputObjectType({
    
    name:"addMovies",
    description:"agrega o modifica peliculas en la BD",
    fields: () => ({

           
            name:{
                type:GraphQLString
            },
            plot:{
                type:GraphQLString
            },
            genre:{
                type:GraphQLString
            },
            url:{
                type:GraphQLString
            },
            director:{
                type:GraphQLString,
            },
            year:{
                type:GraphQLString
            }, 
            rating:{
                type:GraphQLString
            }
    })



})