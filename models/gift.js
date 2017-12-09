var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Gift = sequelize.define("gift",{
    id:{
       type: Sequelize.INTEGER
    },
    userID:{
        type: Sequelize.INTEGER
    },
    relationID:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    image_url:{
        type:Sequelize.STRING
    }
});

User.sync();

module.exports = Gift;