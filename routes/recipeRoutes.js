const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// CRUD routes
router.post('/', recipeController.createRecipe); // Create
router.get('/', recipeController.getAllRecipes); // Read all
router.get('/:id', recipeController.getRecipeById); // Read one
router.put('/:id', recipeController.updateRecipe); // Update
router.delete('/:id', recipeController.deleteRecipe); // Delete

module.exports = router;
