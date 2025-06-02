(function () {
  const scriptTag = document.querySelector('script[src*="index-final.js"]');
  const botId = scriptTag?.getAttribute("data-bot-id");
  const clientId = scriptTag?.getAttribute("data-client-id");
  const selector = scriptTag?.getAttribute("data-selector") || "#botpress-container";

  if (!botId || !clientId) {
    console.error("Botpress: Missing required attributes (botId, clientId).");
    return;
  }

  const webchatScript = document.createElement("script");
  webchatScript.src = "https://cdn.botpress.cloud/webchat/v2.5/webchat.js";
  webchatScript.async = true;

  webchatScript.onload = () => {
    const wait = setInterval(() => {
      if (window.botpress && typeof window.botpress.init === "function") {
        clearInterval(wait);

        window.botpress.init({
          botId,
          clientId,
          selector,
          webchatScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
          configuration: {
            layout: "embedded",
            composerPlaceholder: "I'm your small business advisor! How can I help?",
            botName: "Small Business Advisor",
            botAvatar: "https://files.bpcontent.cloud/2025/05/22/18/20250522184409-6K69LFN2.png",
            themeMode: "light",
            showCloseButton: false,
            radius: 1
          }
        });

        // 👇 THIS is what actually opens the chat
        setTimeout(() => {
          if (window.botpress && typeof window.botpress.open === "function") {
            window.botpress.open();
          }
        }, 500);
      }
    }, 100);
  };

  document.body.appendChild(webchatScript);
})();
