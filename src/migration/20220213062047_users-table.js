/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('user_id').primary().notNullable();
        table.string('username',100).notNullable();
        table.string('email',100).notNullable();
        table.string('Password',150).notNullable();
        table.string('address',100).notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
