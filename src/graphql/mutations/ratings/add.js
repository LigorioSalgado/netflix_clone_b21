import {
    GraphQLNonNull
} from 'graphql' 
import Rating from '../../../models/ratings';
import {RatingInputType,RatingType} from '../../types/ratings';


export default {
    type:RatingType,
    args:{
        data:{
            type:new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        const rating = new Rating(params.data);
        const newRating = rating.save();
        if(!newRating) throw new Error("Error al crear un usuario");
        return newRating

    }

}