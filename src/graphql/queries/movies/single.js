import {GraphQLNonNull,GraphQLID} from 'graphql';
import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies';

const querySingleMovie =  {

    type:MovieType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const movie = Movie.findById(params.id).exec()
        return movie
    }

}
export default querySingleMovie;