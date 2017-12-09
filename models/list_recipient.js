var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var List_Recipient = sequelize.define("list_recipient",{
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
    email:{
        type: Sequelize.STRING
    },
    photo_url:{
        type: Sequelize.STRING
    },
    haveSentEmail:{
        type: Sequelize.BOOLEAN
    }
});
    
List_Recipient.sync();
    
    module.exports = List_Recipient;