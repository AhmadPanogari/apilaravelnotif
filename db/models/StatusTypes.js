const {Model,knex} = require('../index');

class StatusTypes extends Model{
    static get tableName(){
        return 'statustypes';
    }
}

module.exports = StatusTypes;