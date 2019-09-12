exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: "flour"},
        {ingredient_name: "salt"},
        {ingredient_name: "water"},
        {ingredient_name: "ground beef"},
        {ingredient_name: "onions"},
        {ingredient_name: "oil"},
        {ingredient_name: "peppers"},
        {ingredient_name: "juutsai"},
    ]);
};