const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Error retreiving recipes'});
    });
});

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;
  
    Recipes.findIngredients(id)
    .then(ings => {
      if (ings.length) {
        res.json(ings);
      } else {
        res.status(404).json({ message: 'Could not find ingredients for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.findInstructions(id)
    .then(ins => {
      if (ins.length) {
        res.json(ins);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });


module.exports = router;