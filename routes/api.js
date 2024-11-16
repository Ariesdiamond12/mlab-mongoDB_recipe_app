import express from 'express';
import recipeCotroller from '../controllers/recipeCotroller.js';

const router = express.Router(); //the router object will help organise our API endpoints
router.post('/recipe', recipeCotroller.createRecipe); //this is the endpoint for creating a new recipe
router.get('/recipe', recipeCotroller.getRecipe)
router.get('/recipe/:id', recipeCotroller.getRecipeById)
router.put('/recipe:id', recipeCotroller.updateRecipe)
router.delete('/recipe/:id',recipeCotroller.deleteRecipe)

export default router; 
