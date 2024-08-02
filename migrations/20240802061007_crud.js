/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();         // Primary key with auto-increment
      table.string('name').notNullable();       // Name field, required
      table.string('email').unique().notNullable();  // Unique email field, required
      table.string('state').notNullable();      // State field, required
      table.string('phone_number').notNullable();  // Phone number field, required
      table.timestamps(true, true);             // created_at and updated_at timestamps
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');  // Drops the users table if rolled back
  };
  
