import {GraphQLNonNull,GraphQLID} from 'graphql';
import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const querySingleRating =  {

    type:RatingType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const rating = Rating.findById(params.id).exec()
        return rating
    }

}
export default querySingleRating;