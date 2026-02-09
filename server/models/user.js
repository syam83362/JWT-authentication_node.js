const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchemea = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please add a name"],
            trim:true
        },
        email:{
            type:String,
            required:[true,"please add a email"],
            unique:true,
            lowercase:true,
            match:[
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email'
              ]
        },
        password:{
            type:String,
            required:[true,'please enter a valid password'],
            minlength:6,
            select:false
        },
        isEmailVerified:{
            type:Boolean,
            default:false
        },
        emailVerificationtoken:String,
        emailVerificationExpire:Date,
        resetPasswordToken:String,
        resetPasswordExpire:Date,
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)

// Encrypt password using the bcrypt
userSchemea.pre('save',async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

// match user entered password with hashed password in the database

userSchemea.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model(user, userSchemea); 