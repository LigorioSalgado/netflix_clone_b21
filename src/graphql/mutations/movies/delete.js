import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql' 
import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies';


export default {

    type:MovieType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletedMovie = Movie.findByIdAndRemove(params.id).exec()
        if(!deletedMovie) throw new Error("Error al borrar usuario");
        return deletedMovie
    }

}