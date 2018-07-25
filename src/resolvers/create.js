import jwt from 'jsonwebtoken';
import User from '../models/users';

const expiresIn = "1d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";


export const createToken = function (email,password) {

    if(!email || !password) {
        return false
    }

    console.log(email,password)

    const compare = new Promise((resolve,reject) => {

        User.findOne({'email':email}).then((user) => {
            console.log(user);
            if(!user) reject(false)
            user.comparePassword(password,function (err,isMatch){
                console.log(isMatch);
                if(isMatch){
                    let payload = {
                        email:user.email,
                        id:user._id
                    }
                    const token = jwt.sign(payload,secret,{expiresIn});
    
                    resolve(token)
                }else{
                    reject(false)
                }
         })
    
         
        }).catch((err) => {
            return err
        } );

      
 
                        });
    


    return compare

}