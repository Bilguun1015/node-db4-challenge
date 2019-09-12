
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('recipe_name', 128)
            .notNullable();
        tbl.text('recipe_description', 1024);
    })

    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('ingredient_name', 512)
            .notNullable();
    })

    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.text('instructions')
          .notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
  
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.primary(['recipe_id', 'ingredient_id']);

        tbl.string('quantity', 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
