import {
    GraphQLList
} from 'graphql';

import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const queryAllRating = {

    type:new GraphQLList(RatingType),
    resolve(){
        const ratings = Rating.find().exec()
        if(!ratings) throw new  Error ("Error al traer de la bd")
        return raitings
    }


}

export default queryAllRating;