const userInfo = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signIn = async(req,res)=>{

    try{
        const {username , email, password}= req.body
        const existingUser = await userInfo.findOne({username});
        const existingEmail = await userInfo.findOne({email});
        

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exist'
            })
        }
        else if(username.length<4){
            return res.status(400).json({
                success:false,
                message:'Username must have at least 4 characters'
            })
        }

        
        if(existingEmail){
            return res.status(400).json({
                success:false,
                message:'Email already ragisterd ! Please Login'
            })
        }

        const hashedPass = await bcrypt.hash(password,10);

        const newUser = await userInfo.create({
            username,email,password:hashedPass
        })

        return res.status(200).json({
            success:true,
            message:'Signed In'
        })
       
     }
     catch(err){

        console.log(err);
        return res.status(404).json({
            success:false,
            message:"Internal Server Error"
        });

     }

   
}

exports.logIn = async(req,res)=>{
    const {username, password}= req.body;

    const existingUser = await userInfo.findOne({username});

    if(!existingUser){
        return res.status(400).json({
            success:false,
            message:'Username or password is incorrect'
        })
    }

    if(await bcrypt.compare(password,existingUser.password)){

        //provide jwt token 

       const payload={
        name:username,
        jti: jwt.sign({}, "Tcm123")
       }
       
       

        
        const token = jwt.sign(payload, "Tcm123" , {expiresIn:"2d"});
        res.status(200).json({
            id:existingUser._id,
            token:token
        });

    }
    else {

        return res.status(400).json({
            success:false,
            message:'Username or password is incorrect'
        })

    }



}