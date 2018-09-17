const {Model,knex} = require('../index');

class ImageAssets extends Model{
    static get tableName(){
        return 'imageassets';
    }
}

module.exports = ImageAssets;