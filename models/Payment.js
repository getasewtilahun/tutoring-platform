const {Sequelize,DataTypes} =require('sequelize')
const sequelize=require('../config/db')
const Schedule =require('./Schedule')
const User = require('./User')

const Payment=sequelize.define('payment',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
},
{
timestamps:true,
}
)
Payment.belongsTo(Schedule)
module.exports=Payment