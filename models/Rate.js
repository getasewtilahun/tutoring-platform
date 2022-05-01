const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('../config/db')

const Rate=sequelize.define("rate",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    rate:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

},{
    timestamps:true,
})

module.exports=Rate