import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let vapiInstance = null; // Global instance
let pendingAction = null; // Global pending action

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

            try {
              // Handle JSON input
              if (cleaned.startsWith("{") && cleaned.endsWith("}")) {
                const data = JSON.parse(cleaned);
                if (data.action === "navigate" && data.target) {
                  navigate(data.target);
                  return;
                } else if (data.action === "scroll" && data.target) {
                  document.querySelector(data.target)?.scrollIntoView({ behavior: "smooth" });
                  return;
                }
              }

              // Handle user confirmation
              if (pendingAction) {
                if (
                  cleaned.includes("yes") ||
                  cleaned.includes("go ahead") ||
                  cleaned.includes("show") ||
                  cleaned.includes("okay") ||
                  cleaned.includes("open") ||
                  cleaned.includes("go to")
                ) {
                  if (pendingAction.startsWith("navigate:")) {
                    const target = pendingAction.split("navigate:")[1];
                    navigate(target);
                    pendingAction = null;
                    return;
                  }
                }

                if (cleaned.includes("no") || cleaned.includes("not now")) {
                  pendingAction = null;
                  return;
                }
              }

              // Trigger suggestions without auto navigation
              if (cleaned.includes("services")) {
                pendingAction = "navigate:/services";
                vapiInstance?.speak("Do you want to see our services page?");
                return;
              }

              if (cleaned.includes("features")) {
                pendingAction = "navigate:/features";
                vapiInstance?.speak("Would you like to check our features page?");
                return;
              }

              if (cleaned.includes("contact")) {
                pendingAction = "navigate:/contact";
                vapiInstance?.speak("Should I take you to the contact page?");
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
                    console.log("🎯 Navigating to:", menuSlugMap[key]);
                    navigate(`/menu/${menuSlugMap[key]}`);
                    return;
                  }
                }
              
                // ✅ Only fallback if *no specific match* found
                if (
                  !cleaned.includes("small party") &&
                  !cleaned.includes("bbq ride") &&
                  !cleaned.includes("birthday") &&
                  !cleaned.includes("cafeteria") &&
                  !cleaned.includes("marriage")
                ) {
                  navigate("/menu");
                }
              
                return;
              }

              if (cleaned.includes("home")) {
                pendingAction = "navigate:/";
                vapiInstance?.speak("Do you want to go to the home page?");
                return;
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




// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// let vapiInstance = null; // Global instance
// let pendingAction = null; // Global pending action

// const Chatbot = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const assistantId = "59ca1516-2f1d-49e1-ae5c-fe47b9487219";
//     const apiKey = "e79e7217-a26d-48f8-be62-0dc0daeb8c05";

//     const buttonConfig = {
//       position: "bottom-right",
//       offset: "40px",
//       width: "50px",
//       height: "50px",
//       outline: "none",
//       idle: {
//         color: "rgb(93, 254, 202)",
//         type: "pill",
//         title: "Have a quick question?",
//         subtitle: "Talk with our AI assistant",
//         icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"
//       },
//       loading: {
//         color: "rgb(93, 124, 202)",
//         type: "pill",
//         title: "Connecting...",
//         subtitle: "Please wait",
//         icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"
//       },
//       active: {
//         color: "rgb(255, 0, 0)",
//         type: "pill",
//         title: "Call is in progress...",
//         subtitle: "End the call.",
//         icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg"
//       }
//     };

//     const existingScript = document.getElementById("vapi-sdk-script");

//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
//       script.defer = true;
//       script.async = true;
//       script.id = "vapi-sdk-script";
//       document.body.appendChild(script);

//       script.onload = () => {
//         if (!vapiInstance && window.vapiSDK) {
//           vapiInstance = window.vapiSDK.run({
//             apiKey,
//             assistant: assistantId,
//             config: buttonConfig
//           });

//           setTimeout(() => {
//             try {
//               vapiInstance.start();
//             } catch (err) {
//               console.error("❌ Failed to start Vapi:", err.message);
//             }
//           }, 100);

//           vapiInstance.on("message", (msg) => {

//             let lastBotMessageTime = 0;

//             vapiInstance.on("message", (msg) => {
//               const transcript = msg.transcript || "";
//               const cleaned = transcript.trim().toLowerCase();
            
//               const isFromBot = msg.role === "bot";
//               const now = Date.now();
            
//               if (isFromBot) {
//                 lastBotMessageTime = now;
//                 return; // Don't process bot messages
//               }
            
//               // Block inputs too soon after bot speaks (to avoid self-trigger)
//               if (now - lastBotMessageTime < 1000) {
//                 return;
//               }
            
//               try {
//                 // JSON input
//                 if (cleaned.startsWith("{") && cleaned.endsWith("}")) {
//                   const data = JSON.parse(cleaned);
//                   if (data.action === "navigate" && data.target) {
//                     navigate(data.target);
//                     return;
//                   } else if (data.action === "scroll" && data.target) {
//                     document.querySelector(data.target)?.scrollIntoView({ behavior: "smooth" });
//                     return;
//                   }
//                 }
            
//                 // ✅ Confirm user intention
//                 if (pendingAction) {
//                   if (
//                     cleaned.includes("yes") ||
//                     cleaned.includes("go ahead") ||
//                     cleaned.includes("show") ||
//                     cleaned.includes("okay") ||
//                     cleaned.includes("open") ||
//                     cleaned.includes("go to")
//                   ) {
//                     const target = pendingAction.split("navigate:")[1];
//                     navigate(target);
//                     pendingAction = null;
//                     return;
//                   }
            
//                   if (cleaned.includes("no") || cleaned.includes("not now")) {
//                     pendingAction = null;
//                     return;
//                   }
//                 }
            
//                 // ✅ Page keyword detection (suggestion only)
//                 if (cleaned.includes("services")) {
//                   pendingAction = "navigate:/services";
//                   vapiInstance?.speak("Do you want to see our services page?");
//                   return;
//                 }
            
//                 if (cleaned.includes("features")) {
//                   pendingAction = "navigate:/features";
//                   vapiInstance?.speak("Would you like to check our features page?");
//                   return;
//                 }
            
//                 if (cleaned.includes("contact")) {
//                   pendingAction = "navigate:/contact";
//                   vapiInstance?.speak("Should I take you to the contact page?");
//                   return;
//                 }
            
//                 if (cleaned.includes("menu")) {
//                   const menuSlugMap = {
//                     "small party menu": "smallparty",
//                     "bbq ride menu": "bbq-ride",
//                     "birthday menu": "birthday",
//                     "cafeteria menu": "cafeteria",
//                     "marriage menu": "marriage"
//                   };
            
//                   for (const key in menuSlugMap) {
//                     if (cleaned.includes(key)) {
//                       const slug = menuSlugMap[key];
//                       pendingAction = `navigate:/menu/${slug}`;
//                       vapiInstance?.speak(`Do you want to see the ${key} page?`);
//                       return;
//                     }
//                   }
            
//                   pendingAction = "navigate:/menu";
//                   vapiInstance?.speak("Would you like to view our menu?");
//                   return;
//                 }
            
//                 if (cleaned.includes("home")) {
//                   pendingAction = "navigate:/";
//                   vapiInstance?.speak("Do you want to go to the home page?");
//                   return;
//                 }
            
//               } catch (e) {
//                 console.error("⚠️ JSON parsing failed:", e);
//               }
//             });
            
//           });
//         }
//       };
//     } else {
//       if (vapiInstance) {
//         vapiInstance.start();
//       }
//     }
//   }, [navigate]);

//   return null;
// };

// export default Chatbot;
