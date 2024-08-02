const { Model } = require('objection');


class User extends Model {
  
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        state: { type: 'string' },
        phone_number: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' }, 
        updated_at: { type: 'string', format: 'date-time' }, 
      },
    };
  }

}

module.exports = User;
