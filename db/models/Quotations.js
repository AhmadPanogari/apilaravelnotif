const {Model,knex} = require('../index');

class Quotations extends Model{
    static get tableName(){
        return 'quotations';
    }
    static relationMappings(){
        let Members = require('./Members');
        let Products = require('./Products');
        let Categories = require('./Categories');
        return {
            // Create a mapping with the Members model
            members :{
                relation : Model.HasManyRelation,
                modelClass : Members,
                // Where the two are joined
                join :{
                    from : 'quotations.Memberids',
                    to : 'members.Id'
                }
            },
            // Create a mapping with the Products model
            products : {
                relation : Model.HasManyRelation,
                modelClass : Products,
                // Where the two are joined
                join : {
                    from : 'quotations.Productids',
                    to : 'products.Id'
                }
            },
            // Create a mapping with the Categories model (Some Error)
            // categories : {
            //     relation : Model.HasManyRelation,
            //     modelClass : Categories,
            //     // Where the two are joined
            //     join : {
            //         from : 'products.categoryids',
            //         to : 'categories.Id'
            //     }
            // }
        }
    }
}

module.exports = Quotations;