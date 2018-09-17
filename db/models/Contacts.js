const {Model,knex} = require('../index');

class Contacts extends Model{
    static get tableName(){
        return 'contacts';
    }
}

module.exports = Contacts;