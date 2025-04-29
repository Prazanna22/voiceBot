import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let vapiInstance = null; // Global instance

const Chatbot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const assistantId = "59ca1516-2f1d-49e1-ae5c-fe47b9487219";
    const apiKey = "e79e7217-a26d-48f8-be62-0dc0daeb8c05";

    const buttonConfig = {
      position: "bottom-right",
      offset: "40px",
      width: "50px",
      height: "50px",
      outline:"none",
      idle: {
        color: "rgb(93, 254, 202)",
        type: "pill",
        title: "Have a quick question?",
        subtitle: "Talk with our AI assistant",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"
      },
      loading: {
        color: "rgb(93, 124, 202)",
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"
      },
      active: {
        color: "rgb(255, 0, 0)",
        type: "pill",
        title: "Call is in progress...",
        subtitle: "End the call.",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg"
      }
    };

    // Check if Vapi SDK is already loaded
    const existingScript = document.getElementById("vapi-sdk-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
      script.defer = true;
      script.async = true;
      script.id = "vapi-sdk-script";  // ✅ important to give ID
      document.body.appendChild(script);

      script.onload = () => {
        if (!vapiInstance && window.vapiSDK) {
          vapiInstance = window.vapiSDK.run({
            apiKey: apiKey,
            assistant: assistantId,
            config: buttonConfig
          });

          vapiInstance.start();

          vapiInstance.on('message', (msg) => {
            const transcript = msg.transcript || "";
          
            try {
              const cleaned = transcript.trim().toLowerCase();
          
              if (cleaned.startsWith("{") && cleaned.endsWith("}")) {
                const data = JSON.parse(cleaned);
          
                // ✅ Handling JSON navigation
                if (data.action === 'navigate' && data.target) {
                  console.log("Navigation triggered to:", data.target);
                  navigate(data.target);
          
                  // ✅ Prevent speaking this JSON
                  return;  // 🚀 VERY IMPORTANT: Stop here if it's a JSON action
                } else if (data.action === 'scroll' && data.target) {
                  document.querySelector(data.target)?.scrollIntoView({ behavior: 'smooth' });
          
                  return;  // 🚀 Stop after scroll too
                }
              }
          
              // ✅ Only if NOT JSON — handle normal speech
              if (cleaned.includes("pricing")) {
                navigate("/pricing");
              }
              else if (cleaned.includes("menu")) {
                navigate("/menu");
              }
              else if (cleaned.includes("about")) {
                navigate("/about");
              }
              else if (cleaned.includes("contact")) {
                navigate("/contact");
              }
              else if (cleaned.includes("home")) {
                navigate("/");
              }
          
            } catch (e) {
              console.error("⚠️ JSON parsing failed:", e);
            }
          });
          
        }
      };
    } else {
      if (vapiInstance) {
        vapiInstance.start(); // Start again if needed
      }
    }

    // No need to remove script now, keep chatbot persistent

  }, [navigate]);

  return null;
};

export default Chatbot;
