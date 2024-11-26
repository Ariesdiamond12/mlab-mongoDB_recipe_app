import express from 'express';
import recipeController from '../controllers/recipeController.js';
import userController from '../controllers/userController.js';

const router = express.Router(); //the router object will help sorting our API endpoints
// We defining our user routes
router.post('/user', userController.registerUser)
router.post('/user/login', userController.loginUser)

//We are defining our recipe routes
router.post('/recipe', recipeController.createRecipe); //this is the endpoint for creating a new recipe
router.get('/recipe', recipeController.getRecipe)
router.get('/recipe/:id', recipeController.getRecipeById)
router.put('/recipe:id', recipeController.updateRecipe)
router.delete('/recipe/:id',recipeController.deleteRecipe)

export default router; 
