import {GraphQLNonNull,GraphQLID} from 'graphql';
import Genre from '../../../models/genres';
import {GenreType} from '../../types/genres';

const querySingleGenre =  {

    type:GenreType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const genre = Genre.findById(params.id).exec()
        return genre
    }

}
export default querySingleGenre;