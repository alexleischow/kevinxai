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
          defaultState: "opened",
          configuration: {
            composerPlaceholder: "I'm your small business advisor! How can I help?",
            botName: "Small Business Advisor",
            botAvatar: "https://files.bpcontent.cloud/2025/05/22/18/20250522184409-6K69LFN2.png",
            botDescription: "A practical AI advisor that gives clear, expert-backed answers to small business questions.",
            variant: "solid",
            themeMode: "light",
            fontFamily: "inter",
            radius: 1,
            showCloseButton: false
          }
        });
      }
    }, 100);
  };

  webchatScript.onerror = () => {
    console.error("❌ Failed to load Botpress webchat.js");
  };

  document.body.appendChild(webchatScript);
})();
