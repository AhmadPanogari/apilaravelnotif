const {Model,knex} = require('../index');

class Quotations extends Model{
    static get tableName(){
        return 'quotations';
    }
}

module.exports = Quotations;