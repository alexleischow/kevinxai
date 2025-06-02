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
      if (
        window.botpress &&
        typeof window.botpress.init === "function"
      ) {
        clearInterval(wait);

        window.botpress.init({
          botId,
          clientId,
          selector,
          webchatScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
          configuration: {
            layout: "embedded",
            botName: "Small Business Advisor",
            themeMode: "light",
            fontFamily: "inter",
            radius: 1,
            showCloseButton: false,
            composerPlaceholder: "How can I help?"
          }
        });

        // Force open the chat after init
        setTimeout(() => {
          if (typeof window.botpress.open === "function") {
            window.botpress.open();
          }
        }, 500);
      }
    }, 100);
  };

  document.body.appendChild(webchatScript);
})();

