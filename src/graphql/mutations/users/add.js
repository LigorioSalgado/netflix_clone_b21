import {
    GraphQLNonNull
} from 'graphql' 
import User from '../../../models/users';
import {UserInputType,UserType} from '../../types/users';


export default {
    type:UserType,
    args:{
        data:{
            type:new GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        const user = new User(params.data);
        const newUser = user.save();
        if(!newUser) throw new Error("Error al crear un usuario");
        return newUser

    }

}