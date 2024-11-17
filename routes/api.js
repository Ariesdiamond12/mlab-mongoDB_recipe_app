import express from 'express';
import recipeCotroller from '../controllers/recipeCotroller.js';
import userController from '../controllers/userController.js';

const router = express.Router(); //the router object will help organise our API endpoints
// We defining our user routes
router.post('/user', userController.registerUser)
router.post('/user/login', userController.loginUser)

//We are defining our recipe routes
router.post('/recipe', recipeCotroller.createRecipe); //this is the endpoint for creating a new recipe
router.get('/recipe', recipeCotroller.getRecipe)
router.get('/recipe/:id', recipeCotroller.getRecipeById)
router.put('/recipe:id', recipeCotroller.updateRecipe)
router.delete('/recipe/:id',recipeCotroller.deleteRecipe)

export default router; 
