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
    const user = User.findOne({'email':email}).then((user) => {
        console.log(user);
        const compare = new Promise((resolve,reject) => {

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
     
    });

    return compare
     
    }).catch((err) => {
        return err
    } );


    return user

}