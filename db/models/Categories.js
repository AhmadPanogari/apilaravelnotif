const {Model,knex} = require('../index');

class Categories extends Model {
    static get tableName(){
        return 'categories';
    }
}

module.exports = Categories;