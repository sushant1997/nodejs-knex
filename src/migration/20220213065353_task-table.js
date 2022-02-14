/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function (table) {
        table.increments('task_id').primary().notNullable();
        table.string('task_name',100).notNullable();
        table.integer('user_id').unsigned().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
