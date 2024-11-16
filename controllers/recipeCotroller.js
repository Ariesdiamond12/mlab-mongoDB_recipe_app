//It will be responsible for the functions of the incoming request and orchestrating the applications response
import Recipe from "../models/recipe.js";

const createRecipe = async (req, res) => {
    try {
      const newRecipe = await Recipe.create(req.body);
      res.status(201).json(newRecipe);
    } catch (error) {
      console.error("Error occurred while creating the recipe:", error);
      res.status(500).json({ error: error.message || "Error occurred while creating the recipe" });
    }
  };
  
const getRecipe = async (req, res) => {
    try {
        const {page = 1, limit = 5} = req.query;
        const skip = (page - 1) * limit;
        const recipes = await Recipe.find().skip(skip).limit(limit);

        const totalRecipes = await Recipe.countDocuments();
        res.status(200).json({Recipe, totalRecipes, page, limit});
    } catch (error) {
       console.log(error)
       res.status(500).json({error: "An error occured while fecthing recipe"}) 
    }
}

const getRecipeById = async (req, res) => {
    try {
        const recipeId = await req.params.id
        const recipe = await Recipe.findById(recipeId);
        res.status(200).json(recipe)
    } catch (error) {
        console.error(error)
        if(error.kind === "ObjectId"){
            res.status(400).json({error: "Invalid recipe id"})
        }else{
             res.status(500).json({error: "An error occurred while fetching recipe"})
        }
    }
}
const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params; // Extract recipe ID from URL parameters
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
          new: true, // Return the updated document
          runValidators: true, // Ensure validation rules are applied
        });
    
        if (!updatedRecipe) {
          return res.status(404).json({ error: "Recipe not found" });
        }
    
        res.status(200).json(updatedRecipe);
      } catch (error) {
        console.error("Error occurred while updating the recipe:", error);
        if (error.kind === "ObjectId") {
          res.status(400).json({ error: "Invalid recipe id" });
        } else {
          res.status(500).json({ error: "An error occurred while updating the recipe" });
        }
      }
};

const deleteRecipe = async (req, res) => {
    try {
      const { id } = req.params; // Extract recipe ID from URL parameters
      const deletedRecipe = await Recipe.findByIdAndDelete(id);
  
      if (!deletedRecipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
  
      res.status(200).json({ message: "Recipe successfully deleted", deletedRecipe });
    } catch (error) {
      console.error("Error occurred while deleting the recipe:", error);
      if (error.kind === "ObjectId") {
        res.status(400).json({ error: "Invalid recipe id" });
      } else {
        res.status(500).json({ error: "An error occurred while deleting the recipe" });
      }
    }
  };
  

export default {
    createRecipe,
    getRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}
