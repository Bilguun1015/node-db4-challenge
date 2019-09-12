const db = require('../data/db-config.js');

module.exports = {
    find,
    findIngredients,
    findInstructions
}

function find() {
    return db('recipes')
        .then(recipes => {
            return recipes;
        });
};

function findIngredients(id) {
    return db('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', '=', 'ri.recipe_id')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .where({ recipe_id : id })
        .select('i.ingredient_name')
        .then(recipe => {
            return recipe;
        });
};

function findInstructions(id) {
    return db('recipes as r')
        .join('steps as s', 'r.id', 's.recipe_id')
        .where({ recipe_id : id })
        .select('s.step_number', 's.instructions')
        .orderBy('s.step_number')
        .then(ins => {
            return ins;
        });
};

