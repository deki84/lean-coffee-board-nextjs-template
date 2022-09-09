import mongoose from 'mongoose';

const { Schema } = mongoose;

const CardSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  id : { type: Number, required: true },
  
});

// Model Name "Product" --> Collection Name "products"
const Card =
  mongoose.models.leanCoffeeBoard || mongoose.model("Question", CardSchema);

export default Card;