import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql' 
import Movie from '../../../models/movies';
import {RateMovieType,MovieType} from '../../types/movies';

export default {

    type:MovieType,
    args:{
        id:{
            name:"ID",
            type:GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:GraphQLNonNull(RateMovieType)
        }
    },resolve(root,params){
        const {id,data} = params
       return Movie.findByIdAndUpdate(id,{$push:{rate:data.rate}})
        .then((movie) => {
            return Movie.findById(movie.id).exec()
        })
    }

}