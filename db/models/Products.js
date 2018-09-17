const { Model,knex } = require('../index');

class Products extends Model {
    
    static get tableName() {
        return 'products';
    }

    static relationMappings(){
        let ImageAssets = require('./ImageAssets');
        let Categories = require('./Categories');
        return {
            // Create a mapping with the ImageAssets model
            imageassets :{
                relation : Model.HasManyRelation,
                modelClass : ImageAssets,
                // Where the two are joined
                join :{
                    from : 'products.ProductImageIds',
                    to : 'imageassets.Id'
                }
            },
            // Create a mapping with the Categories model
            categories : {
                relation : Model.HasManyRelation,
                modelClass : Categories,
                // Where the two are joined
                join : {
                    from : 'products.CategoryIds',
                    to : 'categories.Id'
                }
            }
        }
    }
}

module.exports = Products;