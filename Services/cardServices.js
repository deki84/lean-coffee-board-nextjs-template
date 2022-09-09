import dbConnect from '../dbConnect';
import Cards from '../models/Cards';


export async function getAllCards(){
    await dbConnect();
 
    const cards = await Cards.find();
    const CardArray = cards.map(
        ({text,name,id})=>{
          return{text,name,id};
        });
    return CardArray;
}