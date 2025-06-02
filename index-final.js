(function () {
  const scriptTag = document.querySelector('script[src*="index-final.js"]');
  const botId = scriptTag?.getAttribute("data-bot-id");
  const clientId = scriptTag?.getAttribute("data-client-id");
  const selector = scriptTag?.getAttribute("data-selector") || "#botpress-container";

  if (!botId || !clientId) {
    console.error("Botpress: Missing required attributes (botId, clientId).");
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://cdn.botpress.cloud/webchat/v2/index.html?botId=${botId}&clientId=${clientId}&open=true&layout=embedded`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.allow = "clipboard-write";

  const container = document.querySelector(selector);
  if (container) {
    container.appendChild(iframe);
  } else {
    console.error(`Could not find element "${selector}"`);
  }
})();

