var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Relation = sequelize.define("relation",{
    id:{
       type: Sequelize.INTEGER
    },
    userID:{
        type:Sequelize.INTEGER
    },
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    relationship:{
        type:Sequelize.STRING
    },
    birthDate:{
        type:Sequelize.DATE
    },
    address:{
        type:Sequelize.STRING
    },
    photo_url:{
        type:Sequelize.STRING
    }
});

Relation.sync();

module.exports = Relation;