import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql' 
import Genre from '../../../models/genres';
import {GenreType} from '../../types/genres';


export default {

    type:GenreType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletedGenre = Genre.findByIdAndRemove(params.id).exec()
        if(!deletedGenre) throw new Error("Error al borrar usuario");
        return deletedGenre
    }

}