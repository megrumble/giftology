var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var User = sequelize.define("user",{
    id:{
       type: Sequelize.INTEGER
    },
    firstName:{
        type: Sequelize.STRING
    },
    lastName:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    photo_url:{
        type: Sequelize.STRING
    }
});

User.sync();

module.exports = User;