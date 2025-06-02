(function () {
  const scriptTag = document.querySelector('script[src*="index-final.js"]');
  const botId = scriptTag?.getAttribute("data-bot-id");
  const clientId = scriptTag?.getAttribute("data-client-id");
  const selector = scriptTag?.getAttribute("data-selector") || "#botpress-container";

  if (!botId || !clientId) {
    console.error("Botpress: Missing required attributes.");
    return;
  }

  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v2.5/webchat.js";
  script.async = true;

  script.onload = () => {
    const wait = setInterval(() => {
      if (window.botpress?.init) {
        clearInterval(wait);

        window.botpress.init({
          botId,
          clientId,
          selector,
          webchatScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
          configuration: {
            layout: "embedded",
            botName: "Small Business Advisor",
            composerPlaceholder: "Ask me anything!",
            showCloseButton: false,
            radius: 1,
            themeMode: "light"
          }
        });

        // ✅ Force open as soon as it's ready
        const check = setInterval(() => {
          if (window.botpress?.open) {
            window.botpress.open();
            clearInterval(check);
          }
        }, 300);
      }
    }, 100);
  };

  script.onerror = () => {
    console.error("❌ Failed to load webchat.js");
  };

  document.body.appendChild(script);
})();
