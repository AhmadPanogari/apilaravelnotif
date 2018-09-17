const {Model,knex} = require('../index');

class Members extends Model{
    static get tableName(){
        return 'members';
    }
}

module.exports = Members;