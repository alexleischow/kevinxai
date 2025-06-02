(function () {
  const scriptTag = document.querySelector('script[src*="index-final.js"]');
  const botId = scriptTag?.getAttribute("data-bot-id");
  const clientId = scriptTag?.getAttribute("data-client-id");

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
          webchatScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
          // No "layout" here
          configuration: {
            botName: "Small Business Advisor",
            composerPlaceholder: "Ask me anything!",
            showCloseButton: true,
            radius: 1,
            themeMode: "light"
          }
        });

        // ✅ Open chat after it's ready
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
