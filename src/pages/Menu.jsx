import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import smallparty from '../assets/smallparty.jpg'; 
import birthday from '../assets/birthday.jpg'; 
import bbq from '../assets/bbq.jpg'; 
import cafe from '../assets/cafe.jpg'; 
import marriage from '../assets/marriage.jpg'; 


const eventTypes = [
  { name: "marriage", image: marriage },
  { name: "bbq-ride", image: bbq },
  { name: "birthday", image: birthday },
  { name: "cafeteria", image: cafe },
  { name: "smallparty", image:  smallparty },
];

export default function Menu() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleVoiceIntent = (event) => {
      const data = event.detail;
      if (data.intent === "navigate_to_menu" && data.menu_name) {
        const menuSlug = data.menu_name.toLowerCase().replace(/\s/g, "-");
        navigate(`/menu/${menuSlug}`);
      }
    };

    window.addEventListener("voice-command", handleVoiceIntent);

    return () => {
      window.removeEventListener("voice-command", handleVoiceIntent);
    };
  }, [navigate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {eventTypes.map((event) => (
        <div
          key={event.name}
          className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img src={event.image} alt={event.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition">
            <button
              onClick={() => navigate(`/menu/${event.name.replace(/\s/g, "-")}`)}
              className="opacity-0 group-hover:opacity-100 bg-white text-black px-5 py-2 rounded-full font-semibold transition"
            >
              Menu
            </button>
          </div>
          <h2 className="text-center my-2 text-md uppercase font-bold">{event.name}</h2>
        </div>
      ))}
    </div>
  );
}
