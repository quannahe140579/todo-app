var configValue = require("./config.json");
module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValue.username}:${configValue.password}@cluster0.u4vmb.mongodb.net/FirstProject?retryWrites=true&w=majority`
    }
}