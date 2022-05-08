const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/db');
const About = require('./About');
const Profile = require('./Profile');
const Report = require('./Report');
const Education =require('./Education');
const Review = require('./Review');
const Schedule = require('./Schedule');
const Quiz = require('./Quiz');
const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'student',
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    timestamps:true,
}
)
User.hasMany(Report, {
    foreignKey: 'studentId',
})
User.hasMany(Report, {
    foreignKey: 'tutorId',
})
User.hasMany(Review, {
    foreignKey: 'studentId',
    as:"Student",
})
User.hasMany(Review, {
    foreignKey: 'tutorId',
    as:"Tutor",
})
User.hasMany(Schedule, {
    foreignKey: 'studentId',
})
User.hasMany(Schedule, {
    foreignKey: 'tutorId',
})
User.hasOne(About)
User.hasOne(Profile)
User.hasOne(Education)
User.hasMany(Quiz)
module.exports = User