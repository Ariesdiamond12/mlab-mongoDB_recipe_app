import express from 'express';
import recipeController from '../controllers/recipeController.js';
import userController from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router(); //the router object will help sorting our API endpoints
// We defining our user routes
router.post('/user', userController.registerUser)
router.post('/user/login', userController.loginUser)

//We are defining our recipe routes
router.post('/recipe', protect, recipeController.createRecipe); //this is the endpoint for creating a new recipe
router.get('/recipe', protect, recipeController.getRecipe)
router.get('/recipe/:id', protect, recipeController.getRecipeById)
router.put('/recipe:id',protect, recipeController.updateRecipe)
router.delete('/recipe/:id', protect, recipeController.deleteRecipe)

export default router; 

















