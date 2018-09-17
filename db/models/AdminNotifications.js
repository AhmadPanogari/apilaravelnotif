const { Model,knex } = require('..');

class AdminNotifications extends Model{
    static get tableName(){
        return 'adminnotifications';
    }
}

module.exports = AdminNotifications;