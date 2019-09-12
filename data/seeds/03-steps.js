exports.seed = function(knex) {
    return knex('steps').insert([
      {recipe_id: 1, step_number: 1, instructions: 'Make the dough'},
      {recipe_id: 1, step_number: 2, instructions: 'prepare the meat'},
      {recipe_id: 1, step_number: 3, instructions: 'pinch the buuz'},
      {recipe_id: 2, step_number: 1, instructions: 'Prepare the ground beef with onions'},
      {recipe_id: 2, step_number: 3, instructions: 'prepare the oil'},
      {recipe_id: 2, step_number: 2, instructions: 'fry the huushuur'},
    ]);
  };