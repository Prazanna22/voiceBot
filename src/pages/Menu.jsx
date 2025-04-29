import { useState } from "react";


export default function Menu() {

  const menuData = {
    breakfast: [
      { item: "Idli with Sambar", qty: "2 pieces", notes: "Includes chutney", price: 30 },
      { item: "Pongal", qty: "150g", notes: "With ghee & pepper flavor", price: 40 },
      { item: "Vada", qty: "1 piece", notes: "With coconut chutney", price: 20 },
    ],
    lunch: [
      { item: "Veg Biryani", qty: "250g", notes: "Served with raitha", price: 90 },
      { item: "Chapati with Paneer Butter Masala", qty: "2 pieces", notes: "Soft & fresh", price: 80 },
      { item: "Curd Rice", qty: "200g", notes: "Garnished with coriander", price: 50 },
    ],
    dinner: [
      { item: "Dosa", qty: "2 pieces", notes: "With chutney & sambar", price: 60 },
      { item: "Upma", qty: "150g", notes: "With lemon pickle", price: 40 },
      { item: "Gulab Jamun", qty: "1 piece", notes: "Sweet dessert", price: 30 },
    ],
  };
  const [selected, setSelected] = useState("breakfast");

  // Calculate total per head based on selected meal
  const totalPerHead = menuData[selected].reduce((sum, food) => sum + food.price, 0);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Bulk Food Pricing (Per Head)</h1>

      <div className="flex justify-center gap-6 mb-6">
        {["breakfast", "lunch", "dinner"].map((meal) => (
          <button
            key={meal}
            className={`px-5 py-2 rounded-xl font-semibold capitalize ${
              selected === meal
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelected(meal)}
          >
            {meal}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 rounded-xl">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Notes</th>
              <th className="px-4 py-2 text-left">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {menuData[selected].map((food, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{food.item}</td>
                <td className="px-4 py-2">{food.qty}</td>
                <td className="px-4 py-2">{food.notes}</td>
                <td className="px-4 py-2">₹{food.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">
          Total Price Per Head: <span className="text-red-500">₹{totalPerHead}</span>
        </h2>
        <p className="text-gray-600 mt-2">(Inclusive of all items listed above)</p>
      </div>
    </div>
  );
}
