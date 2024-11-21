import mongoose from "mongoose";

// I've created a schema which is a JSON object that defines the structure of the data in the collection.
// Meaning that if we are creating the recipe, it should have a name, ingredients, and instructions etc
const recipeSchema = new mongoose.Schema({
    name:{type: String, required: true},
    ingredients:{type:String, required: true},
    instructions:{type:String, required: true},
    category:{type:String, required: true},
    preparationTime:{type:Number, required: true},
    cookingTime:{type:Number, required: true},
    servings:{type:Number, required: true},
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Recipe', recipeSchema);