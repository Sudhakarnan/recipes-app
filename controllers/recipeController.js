const Recipe = require('../models/recipe');

// Create Recipe
exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const recipe = await Recipe.create({ title, ingredients, instructions });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Recipe By ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Recipe
exports.updateRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions },
      { new: true, runValidators: true }
    );
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
