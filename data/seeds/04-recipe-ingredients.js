exports.seed = function(knex, Promise) {
    return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: '2 cups'},
        {recipe_id: 1, ingredient_id: 2, quantity: '1 table spoon'},
        {recipe_id: 1, ingredient_id: 3, quantity: '1 cups'},
        {recipe_id: 1, ingredient_id: 4, quantity: '2 pounds'},
        {recipe_id: 1, ingredient_id: 5, quantity: '1 count'},
        {recipe_id: 1, ingredient_id: 8, quantity: '2 packages'},
        {recipe_id: 2, ingredient_id: 1, quantity: '3 cups'},
        {recipe_id: 2, ingredient_id: 2, quantity: '1 table spoon'},
        {recipe_id: 2, ingredient_id: 3, quantity: '2 cups'},
        {recipe_id: 2, ingredient_id: 4, quantity: '2 pounds'},
        {recipe_id: 2, ingredient_id: 5, quantity: '2 count'},
        {recipe_id: 2, ingredient_id: 6, quantity: '2 cups'},
    ]);
  };
  