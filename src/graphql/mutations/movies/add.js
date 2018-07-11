import {
    GraphQLNonNull
} from 'graphql' 
import Movie from '../../../models/movies';
import {MovieInputType,MovieType} from '../../types/movies';


export default {
    type:MovieType,
    args:{
        data:{
            type:new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        const movie = new Movie(params.data);
        const newMovie = movie.save();
        if(!newMovie) throw new Error("Error al crear un usuario");
        return newMovie

    }

}