import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let vapiInstance = null;
let pendingAction = null;
let lastBotSpeakTime = 0;
let lastNavigatedTo = "";

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
      outline: "none",
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

    const existingScript = document.getElementById("vapi-sdk-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
      script.defer = true;
      script.async = true;
      script.id = "vapi-sdk-script";
      document.body.appendChild(script);

      script.onload = () => {
        if (!vapiInstance && window.vapiSDK) {
          vapiInstance = window.vapiSDK.run({
            apiKey,
            assistant: assistantId,
            config: buttonConfig
          });

          setTimeout(() => {
            try {
              vapiInstance.start();
            } catch (err) {
              console.error("❌ Failed to start Vapi:", err.message);
            }
          }, 1000);

          vapiInstance.on("message", (msg) => {
            const transcript = msg.transcript || "";
            const cleaned = transcript.trim().toLowerCase();
            const now = Date.now();

            // ❌ If bot just spoke, ignore next few seconds (to prevent echo redirect)
            if (now - lastBotSpeakTime < 3000) return;

            try {
              // Handle JSON control
              if (cleaned.startsWith("{") && cleaned.endsWith("}")) {
                const data = JSON.parse(cleaned);
                if (data.action === "navigate" && data.target) {
                  navigate(data.target);
                  lastNavigatedTo = data.target;
                  return;
                } else if (data.action === "scroll" && data.target) {
                  document.querySelector(data.target)?.scrollIntoView({ behavior: "smooth" });
                  return;
                }
              }

              // Handle confirmation
              if (pendingAction) {
                if (
                  cleaned.includes("yes") ||
                  cleaned.includes("go ahead") ||
                  cleaned.includes("show") ||
                  cleaned.includes("okay") ||
                  cleaned.includes("open") ||
                  cleaned.includes("go to")||
                  cleaned.includes("take me to") ||
                  cleaned.includes("navigate") ||
                  cleaned.includes("show me") ||
                  cleaned.includes("yeah") 
                ) {
                  const target = pendingAction.split("navigate:")[1];
                  if (target !== lastNavigatedTo) {
                    navigate(target);
                    lastNavigatedTo = target;
                  }
                  pendingAction = null;
                  return;
                }

                if (cleaned.includes("no") || cleaned.includes("not now")) {
                  pendingAction = null;
                  return;
                }
              }

              // Suggestions (only if no pending action)
              if (!pendingAction) {
                if (cleaned.includes("services")) {
                  pendingAction = "navigate:/services";
                  vapiInstance?.speak("Do you want to see our services page?");
                  lastBotSpeakTime = Date.now();
                  return;
                }

                if (cleaned.includes("features")) {
                  pendingAction = "navigate:/features";
                  vapiInstance?.speak("Would you like to check our features?");
                  lastBotSpeakTime = Date.now();
                  return;
                }

                if (cleaned.includes("contact")) {
                  pendingAction = "navigate:/contact";
                  vapiInstance?.speak("Should I take you to the contact page?");
                  lastBotSpeakTime = Date.now();
                  return;
                }

                if (cleaned.includes("home")) {
                  pendingAction = "navigate:/";
                  vapiInstance?.speak("Do you want to go to the home page?");
                  lastBotSpeakTime = Date.now();
                  return;
                }

                if (cleaned.includes("menu")) {
                  const menuSlugMap = {
                    "small party menu": "smallparty",
                    "bbq ride menu": "bbq-ride",
                    "birthday menu": "birthday",
                    "cafeteria menu": "cafeteria",
                    "marriage menu": "marriage"
                  };

                  for (const key in menuSlugMap) {
                    if (cleaned.includes(key)) {
                      const slug = menuSlugMap[key];
                      pendingAction = `navigate:/menu/${slug}`;
                      vapiInstance?.speak(`Do you want to see the ${key} page?`);
                      lastBotSpeakTime = Date.now();
                      return;
                    }
                  }

                  pendingAction = "navigate:/menu";
                  vapiInstance?.speak("Would you like to view our menu?");
                  lastBotSpeakTime = Date.now();
                  return;
                }
              }

            } catch (e) {
              console.error("⚠️ JSON parsing failed:", e);
            }
          });
        }
      };
    } else {
      if (vapiInstance) {
        vapiInstance.start();
      }
    }
  }, [navigate]);

  return null;
};

export default Chatbot;
