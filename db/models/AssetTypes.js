const {Model,knex} = require('../index');

class AssetTypes extends Model {
    static get tableName(){
        return 'assettypes';
    }
}

module.exports = AssetTypes;