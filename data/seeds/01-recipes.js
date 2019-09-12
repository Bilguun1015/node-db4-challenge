exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        {recipe_name: "Buuz", recipe_description: "Steam the buuz about 15 - 20 mins"},
        {recipe_name: "Huushuur", recipe_description: "Fry the prepared huushuur in hot oil until it turns into golden brown color"}
    ]);
};