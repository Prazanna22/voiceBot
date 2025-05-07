import { useParams } from "react-router-dom";

// Example Menu for Marriage
const eventMenus = {

    marriage: {
        Breakfast: [
    
          "Coffee",
          "Pineapple Pudding/Asoka Halwa",
          "Methu Vadai/Special Vada",
          "Idly",
          "Ghee Pongal",
          "Idiyappam",
          "Poori",
          "Channa Masala",
          "Coconut Chutney",
          "Chilli Chutney",
          "Sambar",
          "Water Bottle",
        ],
        Lunch: [
     
          "Ilaneer Payasam",
          "Makkan Peda",
          "Curd Vadai",
          "White Rice",
          "Kadhamba Sambar",
          "Potato Peas Fry",
          "Vazhakai Curry",
          "Malabar Aviyal",
          "Vatha Kozhambu",
          "Pineapple Rasam",
          "Appalam",
          "Mor Millagai",
          "Potato Chips",
          "Curd",
          "Pickle",
          "Water Bottle",
          "Ice Cream",
        ],
        Dinner: [
        
          "Gulab Jamoon",
          "Ghee Boli",
          "Veg Cutlet",
          "Chappathi",
          "Veg Kuruma",
          "Veg Biryani",
          "Onion Raitha",
          "White Rice",
          "Kadhamba Sambar",
          "Potato Peas Fry",
          "Beans Punjab Curry",
          "Vatha Kolambu",
          "Rasam",
          "Appalam",
          "Potato Chips",
          "Curd",
          "Pickle",
          "Mor Milagai",
          "Water Bottle",
          "Ice cream",
          "Beeda",
          "Banana",
        ],
      },
      
      cafeteria: {
        Breakfast: [
  
          "Coffee",
          "Tea",
          "Milk",
          "Black Tea",
          "Black Coffee",
          "Lemon Tea",
          "Ginger Tea",
          "Masala Tea",
          "Cardamom Tea",
          "Boost",
          "Horlicks",
          "Complan",
          "Hot Badam",
        ],
        Lunch: [
    
          "Samosa",
          "Veg Puff",
          "Egg Puff",
          "Chicken Puff",
          "Cocktail Samosa",
          "Boiled Peanut",
          "Boiled Channa",
          "Bread Channa",
          "Channa Masala",
          "Bread Butter Jam",
          "Veg Sandwich Toast",
          "Veg Sandwich",
          "Veg Sandwich with Cheese",
          "Satni Cheese Toast",
          "Chilli Cheese Toast",
          "Masala Toast",
          "Masala Cheese Toast",
          "Chips & Biscuits",
        ],
        Dinner: [
         
          "Lemon Juice",
          "Lemon Mint Cooler",
          "Grape Juice",
          "Pineapple Juice",
          "Sweet Lime Juice",
          "Popillon (Papaya)",
          "Tropical Best",
          "Tang 'N' Ginger Punch",
          "Purple Rain (Sweet Lime Combo)",
          "California Quencher (Watermelon)",
          "Pure Musk Melon",
          "Pineapple Delight",
          "Fruit Punch (Sweet Lime & Others Fruits)",
          "The Orange Punch",
          "The Citrus Juice",
          "Tweety (Watermelon Combo)",
          "Pomogranate Juice",
          "CM1MS",
          "Choco Banana (Ice Cream based)",
          "Mango Banana Smoothie",
          "Friends Special (Ice Cream Based)",
          "Strawberry Heaven (Ice Cream Based)",
          "Cold Chocolate Drink (No Ice Cream)",
          "Cold Coffee (No Ice Cream)",
        ],
      },
      
      "birthday": {
        Breakfast: [
     
          "Tomato Soup",
          "Sweet Corn Soup",
          "Rose Milk",
          "Badam Kheer",
          "Lemon juice",
          "Orange juice",
          "Mango juice",
          "Aerated drinks/Rasna",
          "Any fresh juice",
          "Flavored milkshakes",
          "Smoothie",
          "Tender coconut water",
          "Hot chocolate",
          "A bottle of squash",
          "Water",
        ],
        Lunch: [
          
          "Any aerated drink or Fruit punch for welcome drink",
          "Tomato soup/Sweet corn soup",
          "French fries or aloo tikki or kabab with sauce",
          "Gobi manchurian",
          "Roti / Naan / Kulcha",
          "Paneer butter masala or Mixed veg gravy",
          "Dal tadka",
          "Dum aloo or baby potato gravy",
          "Veg Dum Biryani with raita",
          "Plain rice, rasam, fryums",
          "Curd and pickle",
          "Gulab jamun",
          "Carrot halwa",
          "Ice cream",
          "Fruit salad",
          "Paan/Beeda",
        ],
        Dinner: [
       
          "Sweet corn salad",
          "Mixed Fruit salad",
          "Kosambari",
          "Vegetables with dip/hummus",
          "Fruits on skewers",
        ],
      },
      
      "bbq-ride": {
        Breakfast: [
       
          "Tangy Chicken 1Kg 30 To 35 Pcs",
          "Drilled Drumsticks 1Kg 8 To 9 Pcs",
          "Yummy Chicken Wings 1Kg 22 To 25 Pcs",
          "Kaadai Or Quail 1 Pcs",
        ],
        Lunch: [
        
          "Prawn 1 Kg 45 To 50 Pcs",
          "Seer Fish Vanjaram 1 Kg 10 Pcs",
          "Pomfret Full Fish 1 Fish",
        ],
        Dinner: [
         
          "Grilled Panner 1 Kg 35 Pcs",
          "Grilled Pineapple 1 Kg 9 To 10 Pcs Slices",
        ],
      },
      
      "smallparty": {
        Breakfast: [
         
          "Karimeen Policathu",
          "Ayla Polichathu",
          "Saer Fish Polichathu",
          "Prawn Polichathu",
          "Chicken Polichathu",
          "Mutton Polichathu",
        ],
        Lunch: [
        
          "Veg Fried Rice or Veg Noodles",
          "Egg Fried Rice/Egg Noodles",
          "Chicken Noodles",
          "Chicken Fried Rice",
          "Fish/Prawn Fried Rice",
          "Mixed or Prawn Noodles",
          "American Chopsuey/Chinese Chopsuey",
          "Mixed Fried Rice/Chicken Fried Rice",
          "Veg. Schezhwan Fried Rice",
          "Paneer Fried Rice",
          "Mushroom Fried Rice",
          "Schezhwan Chicken Fried Rice",
          "Special Veg Fried Rice",
        ],
        Dinner: [
         
          "BBQ Set",
          "Grill Set",
          "Tandoori Set",
          "Kozhi Set",
          "Paneer Set",
          "Chicken Set",
          "Butter Chicken Set",
          "Fish Curry Set",
          "Mutton Curry Set",
          "Chicken Kothu Fry Set",
          "Mutton Fried Set (Boneless)",
        ],
      },
      };

export default function MenuPage() {
  const { eventName } = useParams();
  const menu = eventMenus[eventName];

  console.log("✅ Route param:", eventName);
console.log("✅ Menu found:", eventMenus[eventName]);


  if (!menu) {
    return <div className="text-center mt-10 text-xl font-semibold text-red-500">Menu not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center  mb-10 uppercase">{eventName.replace("-", " ")} Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(menu).map(([title, items]) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-lg p-6  border hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{title.split(" ")[0]}</h2>
                <p className="text-gray-600 font-semibold">{title.split(" ")[1]}</p>
              </div>
              <div className="text-green-600 text-xl">🟩</div>
            </div>
            <hr className="mb-4" />
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="font-medium my-4">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
