(function () {
  const scriptTag = document.currentScript;
  const botId = scriptTag.getAttribute("data-bot-id");
  const clientId = scriptTag.getAttribute("data-client-id");
  const selector =
    scriptTag.getAttribute("data-selector") || "#botpress-container";

  if (!botId || !clientId) {
    console.error(
      "Botpress: Missing required attributes (botId, clientId, configUrl)."
    );
    return;
  }

  const injectScript = document.createElement("script");
  injectScript.src =
    "https://cdn.jsdelivr.net/gh/YottaDev07/inject@v1.0.1/inject.js";
  injectScript.async = true;

  injectScript.onload = () => {
    const wait = setInterval(() => {
      if (
        window.botpress &&
        typeof window.botpress.init === "function" &&
        typeof window.botpress.toggle === "function"
      ) {
        clearInterval(wait);

        window.botpress.init({
          botId,
          clientId,
          selector,
          webchatScriptUrl:
            "https://cdn.botpress.cloud/webchat/v2.5/webchat.js",
          fabScriptUrl: "https://cdn.botpress.cloud/webchat/v2.5/fab.js",
          defaultState: "closed",
          configuration: {
            composerPlaceholder:
              "I'm your small busines advisor! How can I help?",
            botName: "Small Business Advisor",
            botAvatar:
              "https://files.bpcontent.cloud/2025/05/22/18/20250522184409-6K69LFN2.png",
            botDescription:
              "A practical AI advisor that gives clear, expert-backed answers to small business questionsâ€”no fluff, just guidance that works.",
            website: {
              title: "https://kevinx.ai/",
              link: "https://kevinx.ai/",
            },
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
            color: "#027FBC",
            variant: "solid",
            themeMode: "light",
            fontFamily: "inter",
            radius: 1,
          },
        });
      }
    }, 100);
  };

  injectScript.onerror = () =>
    console.error("❌ Failed to load Botpress inject.js");
  document.body.appendChild(injectScript);
})();
